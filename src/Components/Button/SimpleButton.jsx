import { Button } from '@material-ui/core'
import React from 'react'
import { cx } from 'Utils/classnames'
import classes from './SimpleButton.module.css'

const SimpleButton = (props) => {
    return(
        <Button onClick={props.action} classes={{ root:  cx(classes.main, props.className) }}>{props.text}</Button>
    )
}

export default SimpleButton