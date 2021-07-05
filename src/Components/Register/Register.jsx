import { Button, makeStyles, TextField } from '@material-ui/core'
import ModalLayout from 'Components/Layout/ModalLayout/ModalLayout'
import React from 'react'
import { useEffect } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { connect } from 'react-redux'
import { saveToGoogleTable } from 'Redux/commonReducer'
import classes from './Register.module.css'

const useStyles = makeStyles((themes) => ({
    root: {
        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: "#ac0000",
        },
        '& .MuiOutlinedInput-notchedOutline': {
            borderColor: "#ac0000",
            
        },
        "& .MuiOutlinedInput-notchedOutline:hover": {
            borderColor: "#970505",
        },
        "& .MuiFormLabel-root.Mui-focused": {
            color: "#ac0000"
        }
        
    }
})) 

const Register = (props) => {
    useEffect(() => {
        return () => props.setPackageType(null)
    }, [])

    const { t } = useTranslation()

    const material = useStyles()

    const { handleSubmit, control, reset, formState: { errors } } = useForm()

    const onSubmit = (data) => {
        data.url = props.url
        props.saveToGoogleTable(data)
        reset({
            name: "",
            phone: "",
            email: "",
            job: ""
        })
    }

    return (
        <ModalLayout handleOpen={props.handleOpen} className={classes.main}>
            {props.isSuccess ? <p className={classes.thankyou}>{t("register.thankyou")}</p> :
            <form onSubmit={handleSubmit(data => onSubmit(data))}>
                <div className={classes.field}>
                    <Controller
                        name="name"
                        control={control}
                        defaultValue=""
                        rules={{
                            required: {
                                value: true,
                                message: t("errors.required")
                            }
                        }}
                        render={({ field: { onChange, value }, fieldState: { error } }) => (
                            <TextField 
                                error={!!error} 
                                helperText={error ? error.message : null}
                                classes={material} 
                                label={t("register.name")}
                                variant="outlined"
                                onChange={onChange}
                                value={value}
                            />
                        )}
                    />
                </div>
                <div className={classes.field}>
                    <Controller
                        name="phone"
                        control={control}
                        defaultValue=""
                        rules={{
                            required: {
                                value: true,
                                message: t("errors.required")
                            },
                        }}
                        render={({ field: { onChange, value }, fieldState: { error } }) => (
                            <TextField 
                                error={!!error} 
                                helperText={error ? error.message : null}
                                classes={material} 
                                label={t("register.phone")}
                                variant="outlined"
                                onChange={onChange}
                                value={value}
                            />
                        )}
                    />
                </div>
                <div className={classes.field}>
                    <Controller
                        name="email"
                        control={control}
                        defaultValue=""
                        rules={{
                            required: {
                                value: true,
                                message: t("errors.required")
                            },
                            pattern: {
                                value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}/,
                                message: t("errors.email")
                            }
                        }}
                        render={({ field: { onChange, value }, fieldState: { error } }) => (
                            <TextField 
                                error={!!error} 
                                helperText={error ? error.message : null}
                                classes={material} 
                                label="Email"
                                variant="outlined"
                                onChange={onChange}
                                value={value}
                            />
                        )}
                    />
                </div>
                <div className={classes.field}>
                    <Controller
                        name="job"
                        control={control}
                        defaultValue=""
                        rules={{
                            required: {
                                value: true,
                                message: t("errors.required")
                            }
                        }}
                        render={({ field: { onChange, value }, fieldState: { error } }) => (
                            <TextField 
                                error={!!error} 
                                helperText={error ? error.message : null}
                                classes={material} 
                                label={t("register.job")}
                                variant="outlined"
                                onChange={onChange}
                                value={value}
                            />
                        )}
                    />
                </div>
                <Button type="submit">{t("register.submit")}</Button>
            </form>}
        </ModalLayout>
    )
}

let mapStateToProps = (state) => ({
    isSuccess: state.common.isSuccess
})

export default connect(mapStateToProps, { 
    saveToGoogleTable
})(Register)