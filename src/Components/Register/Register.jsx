import { makeStyles, TextField } from '@material-ui/core'
import ModalLayout from 'Components/Layout/ModalLayout/ModalLayout'
import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { connect } from 'react-redux'
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
        }
    }
})) 

const Register = (props) => {
    const { t } = useTranslation()

    const material = useStyles()

    const { handleSubmit, control, reset, formState: { errors } } = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <ModalLayout>
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
                                placeholder="Email"
                                variant="outlined"
                                onChange={onChange}
                                value={value}
                            />
                        )}
                    />
                </div>
                <div className={classes.field}>
                    <Controller
                        name="name"
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
                                placeholder="Email"
                                variant="outlined"
                                onChange={onChange}
                                value={value}
                            />
                        )}
                    />
                </div>
            </form>
        </ModalLayout>
    )
}

let mapStateToProps = (state) => ({

})

export default connect(mapStateToProps, { 

})(Register)