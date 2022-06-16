import { useDispatch, useSelector } from 'react-redux';
import { selectTheme } from '../../features/theme/themeSlice';
import { removeTodo, toggleActiveStatus } from '../../features/todosList/todosSlice';

import './TodoItem.scss'


const TodoItem = ({ active, text, id }) => {


    const theme = useSelector(selectTheme)
    const dispatch = useDispatch()

    const handleToggleActive = (e) => {
        const container = e.target.parentElement
        container.classList.toggle('item-completed')
        dispatch(toggleActiveStatus(id))
    }

    const handleRemove = (e) => {
        e.preventDefault()
        dispatch(removeTodo(id))
    }

    return (
        <li active={`${active}`} className={`todoList-item ${active ? 'item-active' : 'item-completed'} todoList-item--${theme}`}>
            <input
                aria-label='completed checkbox'
                checked = {!active}
                className='input_checkBox'
                type='checkbox'
                onChange={e => handleToggleActive(e)} />

            <p>{text}</p>

            <button
                aria-label='remove todo'
                onClick={e => handleRemove(e)}
                className='todo_button--remove' />
        </li>
    )
}

export default TodoItem