
import { useDispatch, useSelector } from 'react-redux';
import { selectTheme } from '../../features/theme/themeSlice';
import { removeTodosCompleteds, selectCounterActive, selectEntities, selectFilter } from '../../features/todosList/todosSlice';
import FilterButtons from '../filterButtons/filterButtons';
import TodoItem from '../todoItem/TodoItem';
import './TodoList.scss'


const createTodosItems = (entities, filter) => {
    const todosItems = entities.map(item => {
        switch (filter) {
            case 'all':
                return (
                    <TodoItem active={item.active} id={item.id} text={item.text} key={item.id} />
                )

                break;
            case 'active':
                if (item.active) {
                    return (
                        <TodoItem active={item.active} id={item.id} text={item.text} key={item.id} />
                    )
                }
                break;


            case 'completed':
                if (!item.active) {
                    return (
                        <TodoItem active={item.active} id={item.id} text={item.text} key={item.id} />
                    )
                }
                break;
            default:
                return (
                    <TodoItem active={item.active} id={item.id} text={item.text} key={item.id} />
                )
                break;
        }
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
    const filter = useSelector(selectFilter)

    const handleClearCompletedTodos = (e) => {
        e.preventDefault()
        dispatch(removeTodosCompleteds())
    }

    return (
        <>
            <div className={`todoList_container todoList_container--${theme}`}>
                <ul className='todoList_list'>
                    {createTodosItems(entities, filter)}
                </ul>

                <div className='footer'>
                    <p className='counter'>{counterActiveTodos} items left</p>

                    <FilterButtons className='filterButtons--desktop' />

                    <button onClick={e => handleClearCompletedTodos(e)} className='button_clear'>Clear completed</button>

                </div>


            </div>
            <FilterButtons className='filterButtons--mobile' />
        </>
    )
}

export default TodoList;