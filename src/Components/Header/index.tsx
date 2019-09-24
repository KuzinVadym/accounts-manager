import React from 'react';
import { useTranslation } from 'react-i18next';
import injectSheet from 'react-jss'
import withWidth from '@material-ui/core/withWidth';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Paper from '@material-ui/core/Paper';
import Icon from '@material-ui/core/Icon';

import { ReactComponent as Germany } from '../../resources/icons/germany.svg';
import { ReactComponent as UK } from '../../resources/icons/united-kingdom.svg';
import { ReactComponent as Israel } from '../../resources/icons/israel.svg';

const styles = (theme: any) => {
    return {
        main: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100vw",
            fontSize: "12px"
        },
        contacts: {
            display: "flex",
            alignItems: "center",
        },
        appBar: {
            width: "100%",
            backgroundColor: theme.palette.header.backgroundColor,
            color: theme.palette.header.textColor,
            padding: "3px 0 3px 0",
        },
        navBar: {
            width: "100%",
            padding: "3px 0 3px 0",
        },
        brandPanel: {
            width: "66%",
            margin: "auto"
        },
        imagePanel: {
        },
        logoImage: {
            height: "55px",
            cursor: "pointer"
        },
        languagePanel: {
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center"
        },
        langIcon: {
            height: "24px",
            width: "24px",
            margin: "0 8px 0 7px",
            cursor: "pointer"
        }
    }
};

export interface Props {
    classes: any,
    theme: any,
}

const Header = ({ classes, theme }: Props) => {
    const [t, i18n] = useTranslation();

    return (
        <div className={classes.main}>
            <div className={classes.appBar}>
                <Grid
                    container
                    className={classes.brandPanel}
                    direction="row"
                    justify="space-between"
                    alignItems="center"
                >
                    <Grid item>
                        {t('Back to JRC Capital Management')}
                    </Grid>
                    <Grid item>
                        <div className={classes.contacts}>
                            <Icon>phone</Icon>
                            +49 030 84788220
                        </div>
                    </Grid>
                </Grid>
            </div>
            <Paper className={classes.navBar}>
                <Grid container spacing={8} className={classes.brandPanel}>
                    <Grid item xs={12} sm={6}>
                        <img src={theme.images.vvLogo} className={classes.logoImage} alt="" onClick={()=> document.location.href = '/'}/>
                    </Grid>
                    <Hidden xsDown>
                        <Grid item sm={6} className={classes.languagePanel}>
                            <Germany className={classes.langIcon} onClick={() => i18n.changeLanguage('de')}/>
                            <UK className={classes.langIcon} onClick={() => i18n.changeLanguage('en')}/>
                            <Israel className={classes.langIcon} onClick={() => i18n.changeLanguage('he')}/>
                        </Grid>
                    </Hidden>
                    <Hidden smUp>
                        <Grid item xs={12} container justify="space-around">
                            <Germany className={classes.langIcon} onClick={() => i18n.changeLanguage('de')}/>
                            <UK className={classes.langIcon} onClick={() => i18n.changeLanguage('en')}/>
                            <Israel className={classes.langIcon} onClick={() => i18n.changeLanguage('he')}/>
                        </Grid>
                    </Hidden>
                </Grid>
            </Paper>
        </div>
    );
};

export default withWidth()(injectSheet(styles)(Header));

