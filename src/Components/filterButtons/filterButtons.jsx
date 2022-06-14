
import './filterButtons.scss'


const FilterButtons = ({ className, theme }) => {
    return (
        <div className={`filterButtons_container filterButtons_container--${theme} ${className}`}>
            <button className='filter_button selected'>All</button>
            <button className='filter_button  '>Active</button>
            <button className='filter_button '>Completed</button>
        </div>
    )
}


export default FilterButtons