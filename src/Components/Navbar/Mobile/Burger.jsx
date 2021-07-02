import { Button, Drawer } from '@material-ui/core'
import React from 'react'
import { useState } from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { useTranslation } from 'react-i18next'
import classes from './Burger.module.css'
import { connect } from 'react-redux';
import { setCurrentLanguage } from 'Redux/commonReducer';
import { HashLink } from 'react-router-hash-link';
import SocialLinks from 'Components/SocialLinks/SocialLinks';
import { cx } from 'Utils/classnames';

const Burger = (props) => {
    const { t, i18n } = useTranslation()
    
    const handleChangeLanguage = (language) => {
        i18n.changeLanguage(language)
        props.setCurrentLanguage(language)
    }

    const anchor = 'right'

    const [isOpen, setIsOpen] = useState(false)

    const handleOpen = () => {
        setIsOpen(!isOpen)
    }
    

    return(
        <div className={classes.main}>
            <div className={classes.burger}>
                <Button onClick={handleOpen} className={cx(classes.openBut, classes.button)} classes={{label: classes.openButLabel}}>
                    <MenuIcon/>
                </Button>
            </div>
            <Drawer anchor={anchor} open={isOpen} onClose={handleOpen} classes={{paper: classes.paper, root: classes.root}}>
                <Button onClick={handleOpen} className={cx(classes.closeBut, classes.button)} classes={{text: classes.closeButText, label: classes.closeButLabel}}>
                    <CloseIcon/>
                </Button>
                <div className={classes.menuItems}>
                    <HashLink to="#course" onClick={handleOpen}>{t("navbar.menu.course")}</HashLink>
                    <HashLink to="#who" onClick={handleOpen}>{t("navbar.menu.who")}</HashLink>
                    <HashLink to="#program" onClick={handleOpen}>{t("navbar.menu.content")}</HashLink>
                    <HashLink to="#trener" onClick={handleOpen}>{t("navbar.menu.trener")}</HashLink>
                    <HashLink to="#price" onClick={handleOpen}>{t("navbar.menu.price")}</HashLink>
                </div>
                <div className={classes.footer}>
                    <div className={classes.languageButtons}>
                        <Button onClick={()=>{handleChangeLanguage("ru")}} classes={{root: props.currentLanguage === "ru" ? classes.activeLang : undefined, label: classes.langLabel}}>RU</Button>
                        <Button onClick={()=>{handleChangeLanguage("ua")}} classes={{root: props.currentLanguage === "ua" ? classes.activeLang : undefined, label: classes.langLabel}}>UA</Button>
                    </div>
                    <div className={classes.links}>
                        <SocialLinks className={classes.socialLinks}/>
                    </div>
                </div>
            </Drawer>
        </div>
    )
}

let mapStateToProps = (state) => ({
    currentLanguage: state.common.currentLanguage
})

export default connect(mapStateToProps, {
    setCurrentLanguage
})(Burger)