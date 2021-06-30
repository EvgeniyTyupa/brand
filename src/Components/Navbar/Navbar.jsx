import React from 'react'
import classes from './Navbar.module.css'
import SocialLinks from '../SocialLinks/SocialLinks'

import logo from '../../Assets/logo.png'
import { Button, MenuItem, Select } from '@material-ui/core'
import { useTranslation } from 'react-i18next'

import Container from 'Components/Container/Container'
import { HashLink } from 'react-router-hash-link'
import { connect } from 'react-redux'
import { cx } from 'Utils/classnames'


const Navbar = (props) => {
    const { t, i18n } = useTranslation()

    const handleChangeLanguage = (event) => {
        i18n.changeLanguage(event.target.value)
    }

    return(
        <Container>
            <div className={classes.main}>
                <img src={logo} alt="logo" className={classes.logo}/>
                <div className={classes.links}>
                    <HashLink to="#">{t("navbar.menu.course")}</HashLink>
                    <HashLink to="#">{t("navbar.menu.who")}</HashLink>
                    <HashLink to="#">{t("navbar.menu.content")}</HashLink>
                    <HashLink to="#">{t("navbar.menu.trener")}</HashLink>
                    <HashLink to="#">{t("navbar.menu.price")}</HashLink>
                </div>
                
                <SocialLinks className={classes.social}/>
                
                <Select classes={{ root: classes.select, outlined: classes.selectOutline }} variant="outlined" defaultValue="ru" onChange={handleChangeLanguage}>
                        <MenuItem value="ru">RU</MenuItem>
                        <MenuItem value="ua">UA</MenuItem>
                </Select>
                <HashLink to="#" className={classes.register}>{t("actions.register")}</HashLink>
            </div>
        </Container>
        
    )
}

let mapStateToProps = (state) => ({

})

export default connect(mapStateToProps, {})(Navbar)