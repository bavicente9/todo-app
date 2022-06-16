import { useDispatch, useSelector } from 'react-redux';
import { selectTheme } from '../../features/theme/themeSlice';

import './TodoItem.scss'


const TodoItem = (props) => {

    return (
        <>
            <li className='todoList-item item-completed'>
                <input className='input_checkBox' type='checkbox' />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Morbi erat felis, congue a consectetur ac, pretium sed risus.
                    Cras ornare tortor ut ullamcorper posuere. Sed vel dui bibendum,
                    laoreet lectus non, viverra erat. Mauris aliquet velit sagittis elit
                    commodo venenatis. Aoe aoeu
                </p>
                <button className='todo_button--remove'/>
            </li>
            <li className='todoList-item item-active'>
                <input className='input_checkBox' type='checkbox' />
                <p>Todo text example</p>
                <button className='todo_button--remove'/>
            </li>
            <li className='todoList-item'>
                <input className='input_checkBox' type='checkbox' />
                <p>Todo text example</p>
                <button className='todo_button--remove'/>
            </li>
        </>
    )
}

export default TodoItem