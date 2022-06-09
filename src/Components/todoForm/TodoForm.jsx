
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectTheme } from '../../features/theme/themeSlice'
import {addTodo} from '../../features/todosList/todosSlice'
import './TodoForm.scss'

const TodoForm = () => {
    const [textValue, setTextValue] = useState('')
    const [checkboxValue,setCheckboxValue ] = useState(false)

    const theme = useSelector(selectTheme)
    const dispatch = useDispatch()
    

    const handleCheckbox = (e) => {
        e.preventDefault()
        setCheckboxValue(e.target.checked)
    }

    const handleOnChangeText = (e) => {
        e.preventDefault()
        setTextValue(e.target.value)

    }
    
    const onSubmit = (e) => {
        e.preventDefault()
        const id = new Date().valueOf()

        //create the todo item
        const todoItem =  {
            id,
            text: textValue,
            active: !checkboxValue
        }
        //save the item into the store
        dispatch(addTodo(todoItem))
        
        //clean form
        setTextValue('')
    }

    return (
        <div className='todoForm'>
            <form
                className={`form_container form_container--${theme}`}
                onSubmit={onSubmit} >

                <input
                    name='Todo completed state'
                    className="input_checkBox "
                    type='checkbox'
                    onChange = {e => handleCheckbox(e)}
                />
                <input
                    name='todo text'
                    className={`input_text input_text--${theme}`}
                    required={true}
                    type='text' placeholder="Create a new todo..."
                    onChange={e => handleOnChangeText(e)}
                    value={textValue} />

            </form>
        </div>
    )
}


export default TodoForm;