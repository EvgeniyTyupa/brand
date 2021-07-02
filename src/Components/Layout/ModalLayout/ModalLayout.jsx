import { Button } from '@material-ui/core'
import React from 'react'
import classes from './ModalLayout.module.css'

const ModalLayout = (props) => {
    return(
        <div className={classes.main}>
            <div className={classes.window}>
                <Button onClick={props.handleOpen}>X</Button>
                {props.children}
            </div>
        </div>
    )
}

export default ModalLayout