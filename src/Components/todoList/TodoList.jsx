
import { useDispatch, useSelector } from 'react-redux';
import { selectTheme } from '../../features/theme/themeSlice';
import { removeTodosCompleteds, selectCounterActive, selectEntities } from '../../features/todosList/todosSlice';
import FilterButtons from '../filterButtons/filterButtons';
import TodoItem from '../todoItem/TodoItem';
import './TodoList.scss'


const createTodosItems = (entities) => {
    const todosItems = entities.map(item => {
        return (
            <TodoItem active={item.active} id={item.id} text={item.text} key={item.id} />
        )
    })
    return (
        <>{todosItems}</>
    )
}


const TodoList = () => {

    const dispatch = useDispatch()
    const entities = useSelector(selectEntities)
    const theme = useSelector(selectTheme)
    let counterActiveTodos = useSelector(selectCounterActive)

    const handleClearCompletedTodos = (e) => {
        e.preventDefault()
        dispatch(removeTodosCompleteds())
    }

    return (
        <>
            <div className={`todoList_container todoList_container--${theme}`}>
                <ul className='todoList_list'>
                    {createTodosItems(entities)}
                </ul>

                <div className='footer'>
                    <p className='counter'>{counterActiveTodos} items left</p>

                    <FilterButtons theme={theme} className='filterButtons--desktop' />

                    <button onClick={e => handleClearCompletedTodos(e)} className='button_clear'>Clear completed</button>

                </div>


            </div>
            <FilterButtons theme={theme} className='filterButtons--mobile' />
        </>
    )
}

export default TodoList;