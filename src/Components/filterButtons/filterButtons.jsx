
import { useState } from 'react'
import './filterButtons.scss'


const FilterButtons = ({ className, theme }) => {

    const [buttonSelected, setButtonSelected] = useState()

    const changeButtonSelected = (e) => {
        
        setButtonSelected(e)
        if(buttonSelected) buttonSelected.target.classList.remove('selected')
        
        setButtonSelected(e)
        e.target.classList.add('selected')
    }

    const handleClick = (e) => {
        e.preventDefault()
        changeButtonSelected(e)

        
    }

    return (
        <div className={`filterButtons_container filterButtons_container--${theme} ${className}`}>
            <button onClick={e => handleClick(e)} className='filter_button selected'>All</button>
            <button onClick={e => handleClick(e)} className='filter_button  '>Active</button>
            <button onClick={e => handleClick(e)} className='filter_button '>Completed</button>
        </div>
    )
}


export default FilterButtons