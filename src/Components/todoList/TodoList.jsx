
import { useDispatch, useSelector } from 'react-redux';
import { selectTheme } from '../../features/theme/themeSlice';
import { removeTodosCompleteds, selectCounterActive, selectFilter } from '../../features/todosList/todosSlice';
import FilterButtons from '../filterButtons/filterButtons';
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
    //TODO:max characters: 280

    return (
        <>
            <div className={`todoList_container todoList_container--${theme}`}>
                <ul className='todoList_list'>
                    <li className='todoList-item item-completed'>
                        <input className='input_checkBox' type='checkbox' />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Morbi erat felis, congue a consectetur ac, pretium sed risus.
                            Cras ornare tortor ut ullamcorper posuere. Sed vel dui bibendum,
                            laoreet lectus non, viverra erat. Mauris aliquet velit sagittis elit
                            commodo venenatis. Aoe aoeu
                        </p>
                    </li>
                    <li className='todoList-item item-active'>
                        <input className='input_checkBox' type='checkbox' />
                        <p>Todo text example</p>
                    </li>
                    <li className='todoList-item'>
                        <input className='input_checkBox' type='checkbox' />
                        <p>Todo text example</p>
                    </li>
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