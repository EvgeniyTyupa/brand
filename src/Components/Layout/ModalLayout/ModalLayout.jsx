import React from 'react'
import classes from './ModalLayout.module.css'

const ModalLayout = (props) => {
    return(
        <div className={classes.main}>
            <div className={classes.window}>
                {children}
            </div>
        </div>
    )
}

export default ModalLayout