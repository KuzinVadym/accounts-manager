import * as React from 'react';
import injectSheet from "react-jss";
import { useTranslation } from 'react-i18next';

import Icon from "@material-ui/core/Icon";
import Grid from "@material-ui/core/Grid";

type Variants = 'success' | 'warning' | 'error' | 'info';

export interface Props {
    classes: any,
    variant: Variants,
    text: string,
    onClose: any
}

const variantIcon = {
    success: <Icon>check_circle</Icon>,
    warning: <Icon>warning</Icon>,
    error: <Icon>error</Icon>,
    info: <Icon>info</Icon>,
};

const styles = (theme: any) => {
    return {
        snackbar: {
            padding: "18px",
            justifyContent: "center"
        },
        snackbarText: {
            maxWidth: "250px"
        },
        snackbarCloseIcon: {
            cursor: "pointer"
        },
        success: {
            backgroundColor: theme.palette.snackbar.success.back,
            color: theme.palette.snackbar.success.color
        },
        warning: {
            backgroundColor: theme.palette.snackbar.warning.back,
            color: theme.palette.snackbar.warning.color
        },
        error:{
            backgroundColor: theme.palette.snackbar.error.back,
            color: theme.palette.snackbar.error.color
        },

        info: {
            backgroundColor: theme.palette.snackbar.info.back,
            color: theme.palette.snackbar.info.color
        },
    }
};

const SnackbarContentWrapper = ({classes, text, variant='info', onClose}: Props) => {

    const [t, i18n] = useTranslation();

    return (
        <div className={classes[variant]}>
            <Grid
                container
                spacing={24}
                className={classes.snackbar}
                direction="row"
                justify="space-between"
                alignItems="center"
            >
                <Grid item>
                    {variantIcon[variant]}
                </Grid>
                <Grid item className={classes.snackbarText}>
                    {t(text)}
                </Grid>
                <Grid item>
                    <Icon className={classes.snackbarCloseIcon} onClick={()=> onClose()}>clear</Icon>
                </Grid>
            </Grid>
        </div>
    );
};


export default injectSheet(styles)(SnackbarContentWrapper);
