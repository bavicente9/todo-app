import './HeaderLayout.scss'
import { useDispatch, useSelector } from 'react-redux';
import {selectTheme, toggleTheme} from '../../features/theme/themeSlice'


const HeaderLayout = () => {

    const theme = useSelector(selectTheme)
    const dispatch = useDispatch()

    const handleToggleTheme = () => {
      dispatch(toggleTheme())
    }
    return(
        <header className='header'>
            <div className='header_container'>
                <h1 className='title'>TODO</h1>
                <button
                  className={`buttonTheme buttonTheme--${theme}`} 
                    onClick={handleToggleTheme}
                    type='button'
                  />
            </div>
        </header>
    )
}

export default HeaderLayout;