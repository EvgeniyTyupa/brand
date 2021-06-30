import React from 'react'
import { cx } from '../../Utils/classnames.js'
import classes from './SocialLinks.module.css'

import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TelegramIcon from '@material-ui/icons/Telegram';
import LanguageIcon from '@material-ui/icons/Language';

const SocialLinks = (props) => {
    return(
        <div className={cx(classes.main, props.className)}>
            <a href="https://www.instagram.com/profi_business_school/" target="_blank">
                <InstagramIcon/>
            </a>
            <a href="https://www.facebook.com/profispaceschool/" target="_blank">
                <FacebookIcon/>
            </a>
            <a href="https://t.me/profi_space" target="_blank">
                <TelegramIcon/>
            </a>
            <a href="http://www.profi-space.com/" target="_blank">
                <LanguageIcon/>
            </a>
        </div>
    )
}

export default SocialLinks