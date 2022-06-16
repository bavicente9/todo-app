
import { useDispatch, useSelector } from 'react-redux';
import { selectTheme } from '../../features/theme/themeSlice';
import { removeTodosCompleteds, selectCounterActive, selectFilter } from '../../features/todosList/todosSlice';
import FilterButtons from '../filterButtons/filterButtons';
import TodoItem from '../todoItem/TodoItem';
import './TodoList.scss'



const TodoList = () => {

    const dispatch = useDispatch()
    const theme = useSelector(selectTheme)
    const filter = useSelector(selectFilter)
    let counterActiveTodos = useSelector(selectCounterActive)

    const handleClearCompletedTodos = (e) => {
        e.preventDefault()
        dispatch(removeTodosCompleteds())
    }

    return (
        <>
            <div className={`todoList_container todoList_container--${theme}`}>
                <ul className='todoList_list'>
                    {/* TODO: make a function to filter todoItems */}
                    <TodoItem />
                </ul>

                <div className='footer'>
                    <p className='counter'>{counterActiveTodos}</p>

                    <FilterButtons theme={theme} className='filterButtons--desktop' />

                    <button onClick={e => handleClearCompletedTodos(e)} className='button_clear'>Clear completed</button>

                </div>


            </div>
            <FilterButtons theme={theme} className='filterButtons--mobile' />
        </>
    )
}

export default TodoList;