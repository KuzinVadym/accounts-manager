import * as React from 'react';
import injectSheet from "react-jss";

import Icon from "@material-ui/core/Icon";
import {Tooltip} from "@material-ui/core";
import {useTranslation} from "react-i18next";

export interface Props {
    classes: any,
    rule: any
}

const styles = (theme: any) => {
    return {
        rule: {
            display: "flex",
            justifyContent: "space-between",
            fontSize: '12px',
            cursor: "default"
        },
        successIcon: {
            fontSize: '16px',
            marginRight: '7px',
            color: "#83dd0f"
        },
        failIcon: {
            fontSize: '16px',
            marginRight: '7px',
            color: "#dd150c"
        },
    }
};

const NoMatch = ({classes, rule}: Props) => {
    const [t, i18n] = useTranslation();
    return (
        <div className={classes.rule}>
            <Icon className={rule.status ? classes.successIcon : classes.failIcon}>
                {rule.status ? 'check' : 'close'}
            </Icon>
            {rule.tooltip ? (
                <Tooltip title={rule.tooltip} placement="left">
                    <span>{t(rule.text)}</span>
                </Tooltip>
            ) : (<span>{t(rule.text)}</span>) }
        </div>
    );
};


export default injectSheet(styles)(NoMatch);
