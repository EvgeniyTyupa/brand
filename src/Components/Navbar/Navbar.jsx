import React from 'react'
import classes from './Navbar.module.css'
import SocialLinks from '../SocialLinks/SocialLinks'

import logo from '../../Assets/logo.png'
import { makeStyles, MenuItem, Select } from '@material-ui/core'
import { useTranslation } from 'react-i18next'

import Container from 'Components/Container/Container'
import { HashLink } from 'react-router-hash-link'
import { connect } from 'react-redux'
import { TextField } from '@material-ui/core'
import { setCurrentLanguage } from 'Redux/commonReducer'
import Burger from './Mobile/Burger'

const useStyles = makeStyles((themes) => ({
    root: {
        '& .MuiSelect-outlined': {
            padding: "4.5px 18px",
            paddingRight: "32px"
        },
        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: "#ac0000",
        },
        '@media screen and (max-width: 1000px)': {
            display: 'none'
        }
    }
}))

const Navbar = (props) => {
    const material = useStyles()

    const { t, i18n } = useTranslation()

    const handleChangeLanguage = (event) => {
        i18n.changeLanguage(event.target.value)
        props.setCurrentLanguage(event.target.value)
    }


    return(
        <Container>
            <div className={classes.main}>
                <img src={logo} alt="logo" className={classes.logo}/>
                <div className={classes.links}>
                    <HashLink to="#course">{t("navbar.menu.course")}</HashLink>
                    <HashLink to="#who">{t("navbar.menu.who")}</HashLink>
                    <HashLink to="#program">{t("navbar.menu.content")}</HashLink>
                    <HashLink to="#trener">{t("navbar.menu.trener")}</HashLink>
                    <HashLink to="#price">{t("navbar.menu.price")}</HashLink>
                </div>
                
                <SocialLinks className={classes.social}/>
                
                <TextField select classes={material} variant="outlined" defaultValue="ua" onChange={handleChangeLanguage}>
                        <MenuItem value="ru">RU</MenuItem>
                        <MenuItem value="ua">UA</MenuItem>
                </TextField>
                <HashLink to="#price" className={classes.register}>{t("actions.register")}</HashLink>
                <div className={classes.burger}>
                    <Burger/>
                </div>
            </div>
        </Container>
    )
}

let mapStateToProps = (state) => ({
    currentLanguage: state.common.currentLanguage
})

export default connect(mapStateToProps, {
    setCurrentLanguage
})(Navbar)