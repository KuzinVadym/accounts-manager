import * as React from 'react';
import injectSheet from "react-jss";
import { Link } from 'react-router-dom'
import {useTranslation} from "react-i18next";

//181814
//19101964
const styles = (theme: any) => {
    return {
        main: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            width: "100vw",
            backgroundColor: theme.palette.footer.backgroundColor,
            color: theme.palette.footer.textColor,
            fontSize: theme.palette.footer.fontSize,
            padding: "5px 0 5px 0"
        },
        link: theme.palette.footer.link,
        text: {
            margin: "0 15px 0 15px"
        },
        iconsRef: {
            fontSize: "1px",
            textDecoration: "none"
        }
    }
};

export interface Props {
    classes: any,
    theme: any
}

const Footer = ({classes, theme}: Props) => {
    const [t, i18n] = useTranslation();

    return (
        <div className={classes.main}>
            <span className={classes.text}>
                © Fundamental Capital 2019. {t('All rights reserved')}. {t('Investing in the financial markets involves risks')}. {t('Please read our')}
                <Link className={classes.link} to="/risk">{t('Risk Information')}</Link>
            </span>
        </div>
    );
}

export default injectSheet(styles)(Footer);