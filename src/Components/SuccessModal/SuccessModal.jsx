import ModalLayout from 'Components/Layout/ModalLayout/ModalLayout'
import React from 'react'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import classes from './SuccessModal.module.css'

const SuccessModal = (props) => {
    const { t } = useTranslation()

    useEffect(() => {
        return () => {
            window.location.pathname = '/'
        }
    }, [])

    return(
        <ModalLayout handleOpen={props.handleOpen} className={classes.main}>
            <p>{t("success")}</p>
        </ModalLayout>
    )
}

export default SuccessModal