import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import injectSheet from 'react-jss';
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';

import AppContext from '../../context/index';
import InputField from '../../Components/InputField';

import { validateUserName } from './validation'
import {Tooltip} from "@material-ui/core";
import FormHeader from "../../Components/FormHeader";

const styles = (theme: any) => {
    return {
        main: {
            width: "35vw",
            minWidth: "450px",
        },
        linkStyle: theme.palette.navigation.link,
        messages: {
            color: "#9E9E9E",
            margin: "10px"
        },
        mesageContent: {
            fontSize: "24px"
        },
        messageTip: {
            margin: "15px 0 25px 0",
            color: "#dd150c",
            cursor: "default"
        },
        messageTooltip: {
            marginTop: "8px"
        },
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

const ForgottenPassword = ({ classes }: Props) => {
    const appContext = useContext(AppContext);
    const [userNameValidStatus, setUserNameValidStatusHandler] = useState(true);
    const [passwordVisibleStatus, setPasswordVisibleStatusHandler] = useState(false);
    // @ts-ignore
    const { emailConfirmation, changeEmailConfirmation, forgotPassword } = appContext;
    const [t, i18n] = useTranslation();

    function onKeyNameHandler(e: any) {
        if (e.keyCode === 13) {
            setUserNameValidStatusHandler(validateUserName(e.target.value));
            if (validateUserName(e.target.value)) {
                forgotPassword({ email: e.target.value })
            }
        }
    }

    function onBlurNameHandler(e: any) {
        setUserNameValidStatusHandler(validateUserName(e.target.value));
        if (validateUserName(e.target.value)) {
            setPasswordVisibleStatusHandler(true);
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
                topMessage="Forgot the password"
                mainMessage="Please enter your e-mail adress"
                bottomMessage="What's next?"
                tipMessage="Enter your email address and we'll send you a link to reset your password"
            />
        </Grid>
        <Grid item className={classes.gridItem}>
            <InputField
                id="user_name_input"
                label={t('Email')}
                type="email"
                value={emailConfirmation}
                onChange={(value: string) => changeEmailConfirmation(value)}
                valid={userNameValidStatus}
                onFocus={() => setUserNameValidStatusHandler(true)}
                onBlur={(e: any) => onBlurNameHandler(e)}
                onKeyDown={(e: any) => onKeyNameHandler(e)}
            />
        </Grid>
        <Grid item className={classes.gridButtonItem}>
            <Button
                variant="contained"
                color="primary"
                fullWidth={true}
                disabled={!userNameValidStatus}
                onClick={() => forgotPassword({ email: emailConfirmation })}
            >
                {t('Send')}
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

export default injectSheet(styles)(ForgottenPassword);