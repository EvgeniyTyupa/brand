import { Button } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close';
import React, { useEffect } from 'react'
import { cx } from 'Utils/classnames'
import classes from './ModalLayout.module.css'

import Aos from 'aos'
import 'aos/dist/aos.css'

const ModalLayout = (props) => {
    useEffect(() => {
        Aos.init({ duration: 300 });
    }, []);

    return(
        <div className={classes.main} data-aos="fade">
            <div className={cx(classes.window, props.className)} data-aos="zoom-in" data-aos-delay="300">
                <Button onClick={props.handleOpen} className={classes.closeBut}>
                    <CloseIcon/>
                </Button>
                {props.children}
            </div>
        </div>
    )
}

export default ModalLayout