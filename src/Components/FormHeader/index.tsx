import * as React from 'react';
import injectSheet from "react-jss";
import { useTranslation } from 'react-i18next';

import Grid from "@material-ui/core/Grid";
import {Tooltip} from "@material-ui/core";

export interface Props {
    classes: any,
    topMessage: string,
    mainMessage: string,
    bottomMessage: string,
    tipMessage: string,
}


const styles = (theme: any) => {
    return {
        topMessage: {
            color: "#9E9E9E",
            margin: "10px"
        },
        mainMessage: {
            fontSize: "28px"
        },
        bottomMessage: {
            margin: "15px 0 25px 0",
            color: "#dd150c",
            cursor: "default"
        },
        tipMessage: {
            marginTop: "8px"
        },
    }
};

const Components = ({ classes, topMessage, mainMessage, bottomMessage, tipMessage  }: Props) => {

    const [t, i18n] = useTranslation();

    return (
        <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="center"
        >
            <Grid item className={classes.topMessage}>
                <span>{t(topMessage)}</span>
            </Grid>
            <Grid item className={classes.mainMessage}>
                <span>{t(mainMessage)}</span>
            </Grid>
            <Grid item className={classes.bottomMessage}>
                <Tooltip
                    classes={{ tooltip: classes.tipMessage }}
                    title={t(tipMessage)} placement="bottom">
                    <span>{t(bottomMessage)}</span>
                </Tooltip>
            </Grid>
        </Grid>
    );
};


export default injectSheet(styles)(Components);
