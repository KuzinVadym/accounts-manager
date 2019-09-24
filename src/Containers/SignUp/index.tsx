import React, { useState, useContext, createRef } from 'react';
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
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


const styles = (theme: any) => {
    return {
        main: {
            width: "35vw",
            minWidth: "450px",

        },
        linkStyle: theme.palette.navigation.link,
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

const SignUp = ({ classes }: Props) => {
    const appContext = useContext(AppContext);
    const [userNameValidStatus, setUserNameValidStatusHandler] = useState(true);
    const [userPasswordValidStatus, setUserPasswordValidStatusHandler] = useState(true);
    const [passSelectedStatus, setPassSelectedStatusHandler] = useState(false);
    const [passConfirmSelStatus, setPassConfirmSelStatusHandler] = useState(false);
    const [userPasswordConfirmationValidSt, setUserPassConfirmValidStHandler] = useState(true);
    // @ts-ignore
    const { user, changeUser, emailExists, checkEmail, signUp } = appContext;
    const [t, i18n] = useTranslation();

    function checkSignUpValidation() {
        return ((emailExists || !userNameValidStatus || !userPasswordValidStatus || !userPasswordConfirmationValidSt));
    }

    function onBlurEmailHandler(e: any) {
        setUserNameValidStatusHandler(validateUserName(e.target.value));
        if (validateUserName(e.target.value)) {
            checkEmail(user.email);
        }
    }

    function onNameKeyDownHandler(e: any) {
        if (e.keyCode === 13) {
            e.target.blur();
            setPassSelectedStatusHandler(true);
        }
    }

    function onBlurPasswordHandler(e: any) {
        setUserPasswordValidStatusHandler(validatePassword(e.target.value));
    }

    function onPasswordKeyDownHandler(e: any) {
        if (e.keyCode === 13) {
            e.target.blur();
            setPassConfirmSelStatusHandler(true);
        }
    }

    function onBlurPasswordConfirmationHandler(e: any) {
        setUserPassConfirmValidStHandler(validatePassConfirm(user.passwordConfirmation)(e.target.value));
    }

    function onPasswordConfirmationKeyDownHandler(e: any) {
        if (e.keyCode === 13) {
            setUserPassConfirmValidStHandler(validatePassConfirm(user.passwordConfirmation)(e.target.value));
            if (validatePassConfirm(e.target.value)) {
                signUp()
            }
        }
    }

    return <Grid
        className={classes.main}
        container
        spacing={24}
        direction="column"
        justify="flex-start"
    >
        <Grid item className={classes.gridItem}>
            <FormHeader
                topMessage="Registration"
                mainMessage="Please assign a password"
                bottomMessage="What is it needed for?"
                tipMessage="With your verified e-mail address and personal password, you will always have the option to log in and continue the process"
            />
        </Grid>
        <Grid item className={classes.gridItem}>
            <InputField
                label={t('Email')}
                type="email"
                value={user.email}
                onChange={(value: string) => changeUser(Object.assign(user, {email: value}))}
                valid={userNameValidStatus}
                helperTextStatus={!emailExists}
                helperText={emailExists ? t('E-mail is valid but already exist') : undefined}
                onFocus={() => setUserNameValidStatusHandler(true)}
                onBlur={(e: any) => onBlurEmailHandler(e)}
                onKeyDown={(e: any) => onNameKeyDownHandler(e)}
            />
        </Grid>
        <Grid item className={classes.gridItem}>
            <InputField
                label={t('Password')}
                type="password"
                value={user.password}
                onChange={(value: string) => changeUser(Object.assign(user, {password: value}))}
                valid={userPasswordValidStatus}
                focus={passSelectedStatus}
                onFocus={() => setUserPasswordValidStatusHandler(true)}
                onBlur={(e: any) => onBlurPasswordHandler(e)}
                onKeyDown={(e: any) => onPasswordKeyDownHandler(e)}
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
                focus={passConfirmSelStatus}
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
                onClick={() => signUp()}
            >
                {t('Sign up')}
            </Button>
        </Grid>
        <Grid item className={classes.gridItem}>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                <Grid item>
                    <Link className={classes.linkStyle} to="/">{t('Back to Login')}</Link>
                </Grid>
            </Grid>
        </Grid>
    </Grid>;
};

// @ts-ignore
export default injectSheet(styles)(SignUp);