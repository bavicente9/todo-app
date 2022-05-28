import './BackgroundLayout.scss'

const Background = () => {
  
    //TODO:   use the theme with redux
    
    const theme = 'dark'
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