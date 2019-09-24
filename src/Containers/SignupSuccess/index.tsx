import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import injectSheet from 'react-jss';

import Grid from "@material-ui/core/Grid";
import { ReactComponent as Email } from '../../resources/icons/email.svg';
import {Tooltip} from "@material-ui/core";

const styles = (theme: any) => {
    return {
        emailIcon: {
            height: "200px",
            width: "200px",
        },
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
            maxWidth: "350px",
            textAlign: "center"
        }
    }
};

export interface Props {
    classes: any
}

const SignupSuccess = ({ classes }: Props) => {
    // @ts-ignore
    const [t, i18n] = useTranslation();



    return <Grid
        className={classes.main}
        container
        spacing={24}
        direction="column"
        alignItems="center"
    >
        <Grid item className={classes.gridItem}>
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
            >
                <Grid item className={classes.messages}>
                    <span>{t('Forgot the password')}</span>
                </Grid>
                <Grid item className={classes.mesageContent}>
                    <span>{t('Please enter your e-mail adress')}</span>
                </Grid>
                <Grid item className={classes.messageTip}>
                    <Tooltip
                        classes={{ tooltip: classes.messageTooltip }}
                        title={t('We have sent you a verification link to your e-mail address. Please check your inbox and spam folder and follow the points in the email.')} placement="bottom">
                        <span>{t('What\'s next?')}</span>
                    </Tooltip>
                </Grid>
                <Grid item className={classes.gridItem}>
                    <Email className={classes.emailIcon} />
                </Grid>

                <Grid item className={classes.gridItem}>
                    <span className={classes.message}>
                        {t('We have sent you a verification link to your e-mail address. Please check your inbox and spam folder and follow the points in the email.')}
                    </span>
                </Grid>
            </Grid>
        </Grid>
    </Grid>;
};

export default injectSheet(styles)(SignupSuccess);