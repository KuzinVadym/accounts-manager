import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import injectSheet from 'react-jss';

import Grid from "@material-ui/core/Grid";
import { ReactComponent as Email } from '../../resources/icons/email.svg';

const styles = (theme: any) => {
    return {
        emailIcon: {
            height: "10vw",
            width: "10vw",
        },
        message: {
            fontSize: "28px",
            fontWeight: "bold",

        },
        gridItem: {
            width: "25vw",
            textAlign: "center"
        }
    }
};

export interface Props {
    classes: any
}

const ForgottenPasswordSuccess = ({ classes }: Props) => {
    // @ts-ignore
    const [t, i18n] = useTranslation();



    return <Grid
        className={classes.main}
        container
        spacing={24}
        direction="column"
        alignItems="center"
    >
        <Grid item>
            <Email className={classes.emailIcon} />
        </Grid>
        <Grid item className={classes.gridItem}>
            <span className={classes.message}>
                {t('New link for restoring password was sended on your email. Please pay attention - link will expired in one hour.')}
            </span>
        </Grid>
    </Grid>;
};

export default injectSheet(styles)(ForgottenPasswordSuccess);