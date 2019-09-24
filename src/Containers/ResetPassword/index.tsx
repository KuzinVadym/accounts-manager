import React, { useState, useEffect, useContext } from 'react';
import injectSheet from 'react-jss';
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';

import AppContext from '../../context/index'
import Rule from '../../Components/Rule';
import Rules from '../../Components/Rules';
import InputField from '../../Components/InputField';

import {
    validateUserName,
    validatePassword,
    validatePassConfirm,
    passwordRules,
    rulesVisibleStatus,
    passwordConfirmationRules,
    rulesVisibleConfirmStatus
} from './validation'
import FormHeader from "../../Components/FormHeader";
import {useTranslation} from "react-i18next";

const styles = (theme: any) => {
    return {
        main: {
            width: "35vw",
            minWidth: "450px",

        },
        gridItem: {
            display: "flex",
            justifyContent: "center",
        },
        gridItemNotification: {
            display: "flex",
            justifyContent: "flex-end",

        },
        gridButtonItem: {
            display: "flex",
            alignItems: "center",
        },
    }
};

export interface Props {
    classes: any
}

const ResetPassword = ({ classes }: Props) => {
    const appContext = useContext(AppContext);
    const [userNameValidStatus, setUserNameValidStatusHandler] = useState(true);
    const [userPasswordValidStatus, setUserPasswordValidStatusHandler] = useState(true);
    const [userPasswordConfirmationValidSt, setUserPassConfirmValidStHandler] = useState(true);
    // @ts-ignore
    const { user, changeUser, emailExists, resetPassword } = appContext;
    const [t, i18n] = useTranslation();

    useEffect(() => {
        const email = sessionStorage.getItem("email");
        const userId = sessionStorage.getItem("userId");
        const confirmationCode = sessionStorage.getItem("code");
        changeUser(Object.assign({}, user, {email, userId, password: '', passwordConfirmation: '', confirmationCode}));
    }, user);

    function checkSignUpValidation() {
        return ((emailExists || !userNameValidStatus || !userPasswordValidStatus || !userPasswordConfirmationValidSt));
    }

    function onBlurEmailHandler(e: any) {
        setUserNameValidStatusHandler(validateUserName(e.target.value));
    }

    function onBlurPasswordHandler(e: any) {
        setUserPasswordValidStatusHandler(validatePassword(e.target.value));
    }

    function onBlurPasswordConfirmationHandler(e: any) {
        setUserPassConfirmValidStHandler(validatePassConfirm(user.passwordConfirmation)(e.target.value));
    }

    function onPasswordConfirmationKeyDownHandler(e: any) {
        if (e.keyCode === 13) {
            setUserPassConfirmValidStHandler(validatePassConfirm(user.passwordConfirmation)(e.target.value));
            if (validatePassConfirm(e.target.value)) {
                resetPassword()
            }
        }
    }

    return <Grid
        className={classes.main}
        container
        spacing={24}
        direction="column"
        alignItems="stretch"
    >
        <Grid item className={classes.gridItem}>
            <FormHeader
                topMessage="Update password"
                mainMessage="Please choose a new password"
                bottomMessage="What's next?"
                tipMessage="After setting the new password, you can log in with your new password"
            />
        </Grid>
        <Grid item className={classes.gridItem}>
            <InputField
                label={t('Email')}
                type="email"
                value={user.email}
                onChange={(value: string) => changeUser(Object.assign(user, {email: value}))}
                valid={userNameValidStatus}
                onFocus={() => setUserNameValidStatusHandler(true)}
                onBlur={(e: any) => onBlurEmailHandler(e)}
            />
        </Grid>
        <Grid item className={classes.gridItem}>
            <InputField
                label={t('Password')}
                type="password"
                value={user.password}
                onChange={(value: string) => changeUser(Object.assign(user, {password: value}))}
                valid={userPasswordValidStatus}
                onFocus={() => setUserPasswordValidStatusHandler(true)}
                onBlur={(e: any) => onBlurPasswordHandler(e)}
            />
        </Grid>
        {!rulesVisibleStatus(user.password, userPasswordValidStatus) ? (
            <Grid item className={classes.gridItemNotification}>
                <Rules>
                    {passwordRules(user.password).map((rule, index) => (
                        <Rule key={`password_rule_${index}`} rule={rule}/>)
                    )}
                </Rules>
            </Grid>
        ) : null }
        <Grid item className={classes.gridItem}>
            <InputField
                label={t('Password Confirmation')}
                type="password"
                value={user.passwordConfirmation}
                onChange={(value: string) => changeUser(Object.assign(user, {passwordConfirmation: value}))}
                valid={userPasswordConfirmationValidSt}
                onFocus={() => setUserPassConfirmValidStHandler(true)}
                onBlur={(e: any) => onBlurPasswordConfirmationHandler(e)}
                onKeyDown={(e: any) => onPasswordConfirmationKeyDownHandler(e)}
            />
        </Grid>
        {!rulesVisibleConfirmStatus(user.passwordConfirmation, user.password, userPasswordConfirmationValidSt) ? (
            <Grid item className={classes.gridItemNotification}>
                <Rules>
                    {passwordConfirmationRules(user.passwordConfirmation, user.password).map((rule, index) => (
                        <Rule key={`password_rule_${index}`} rule={rule}/>)
                    )}
                </Rules>
            </Grid>
        ) : null }
        <Grid item className={classes.gridButtonItem}>
            <Button
                variant="contained"
                color="primary"
                fullWidth={true}
                disabled={checkSignUpValidation()}
                onClick={() => resetPassword()}
            >
                {t('Update')}
            </Button>
        </Grid>
    </Grid>;
};

// @ts-ignore
export default injectSheet(styles)(ResetPassword);