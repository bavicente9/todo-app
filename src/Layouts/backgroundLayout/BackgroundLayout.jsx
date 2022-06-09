import { useSelector } from 'react-redux'
import { selectTheme } from '../../features/theme/themeSlice'


import './BackgroundLayout.scss'

const Background = () => {
  
    const theme = useSelector(selectTheme)
    return(
        <div className="background_container">
            <div className={`background_top background_top--${theme}`}>

            </div>

            <div className={`background_bottom background_bottom--${theme}`}>

            </div>
        </div>
    )
}

export default Background;