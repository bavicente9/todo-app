
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectTheme } from '../../features/theme/themeSlice'
import { changeFilter, selectFilter } from '../../features/todosList/todosSlice'
import './filterButtons.scss'


const FilterButtons = ({ className }) => {
    const theme = useSelector(selectTheme)
    const defaultFilter = useSelector(selectFilter) 
    const dispatch = useDispatch()
    
    //set the default filter selected
    useEffect(() => {
        let newButtonsSelected =[ ...document.querySelectorAll(`[value="${defaultFilter}"]`)]
        newButtonsSelected.map(item => item.classList.add('filterSelected'))

        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])


    const handleChangeFilterSelected = (e) => {

        e.preventDefault()
        const value = e.target.value
        //clean the prev filter selected 
        let prevButtonsSelected =[ ...document.getElementsByClassName(`filterSelected`)]
        if (prevButtonsSelected) {
            prevButtonsSelected.map(item => item.classList.remove('filterSelected'))
        }
        
        //set the new filter
        let newButtonsSelected =[ ...document.querySelectorAll(`[value="${value}"]`)]
        newButtonsSelected.map(item => item.classList.add('filterSelected'))
        
        dispatch(changeFilter(value))
    }


    return (
        <div className={`filterButtons_container filterButtons_container--${theme} ${className}`}>
            <button value='all' onClick={e => handleChangeFilterSelected(e)} className='filter_button '>All</button>
            <button value='active' onClick={e => handleChangeFilterSelected(e)} className='filter_button  '>Active</button>
            <button value='completed' onClick={e => handleChangeFilterSelected(e)} className='filter_button '>Completed</button>
        </div>
    )
}


export default FilterButtons