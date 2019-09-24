import React, { useState, useContext, createRef } from 'react';
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import injectSheet from 'react-jss';
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';

import AppContext from '../../context/index';
import InputField from '../../Components/InputField';
import FormHeader from '../../Components/FormHeader';

import { validateUserName } from './validation'

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
        gridButtonItem: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        }
    }
};

export interface Props {
    classes: any
}

const Login = ({ classes }: Props) => {
    const appContext = useContext(AppContext);
    const [userNameValidStatus, setUserNameValidStatusHandler] = useState(true);
    const [passwordVisibleStatus, setPasswordVisibleStatusHandler] = useState(false);
    // @ts-ignore
    const { user, changeUser, emailExists, checkEmail, login } = appContext;
    const testRef = createRef();
    const [t, i18n] = useTranslation();

    function onNameKeyDownHandler(e: any) {
        if (e.keyCode === 13) {
            e.target.blur();
        }
    }

    function onBlurNameHandler(e: any) {
        setUserNameValidStatusHandler(validateUserName(e.target.value));
        if (validateUserName(e.target.value)) {
            checkEmail(user.email);
            setPasswordVisibleStatusHandler(true);
        }
    }
    // @ts-ignore
    return <Grid
        className={classes.main}
        container
        spacing={24}
        direction="column"
        justify="flex-start"
    >
        <Grid item className={classes.gridItem}>
            <FormHeader
                topMessage="Login"
                mainMessage={emailExists ? 'Welcome back' : 'Welcome'}
                bottomMessage="Forgot the password?"
                tipMessage="You can always reset your password. We will send you a link to your verified e-mail address"
            />
        </Grid>
        <Grid item className={classes.gridItem}>
            <InputField
                id="user_name_input"
                label={t('Email')}
                type="email"
                value={user.email}
                onChange={(value: string) => changeUser(Object.assign(user, {email: value}))}
                valid={userNameValidStatus}
                onFocus={() => setUserNameValidStatusHandler(true)}
                onBlur={(e: any) => onBlurNameHandler(e)}
                onKeyDown={(e: any) => onNameKeyDownHandler(e)}
            />
        </Grid>
        {(emailExists) ? (<Grid item className={classes.gridItem}>
            <InputField
                id="user_password_input"
                label={t('Password')}
                type="password"
                focus={passwordVisibleStatus}
                value={user.password}
                onChange={(value: string) => changeUser(Object.assign(user, {password: value}))}
            />
        </Grid>) : null}
        <Grid item className={classes.gridItem}>
            <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
            >
                <Grid item>
                    <Link className={classes.linkStyle} to="/forgottenpassword">{t('Forgot the password?')}</Link>
                </Grid>
                <Grid item>
                    <Link className={classes.linkStyle} to="/signup">{t('Not registered yet?')}</Link>
                </Grid>
            </Grid>
        </Grid>
        <Grid item className={classes.gridButtonItem}>
            <Button
                variant="contained"
                color="primary"
                fullWidth={true}
                disabled={!userNameValidStatus}
                onClick={() => login()}
            >
                {t('Sign in')}
            </Button>
        </Grid>
    </Grid>;
};

export default injectSheet(styles)(Login);