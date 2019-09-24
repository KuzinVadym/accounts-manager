import React, { useState, useContext } from 'react';
import { Router } from 'react-router';

import { MuiThemeProvider } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import SnackbarContentWrapper from '../../Components/SnackbarContentWrapper';

import Routers from '../../routers';
import theme from '../../customization/theme';
import './App.css';
import AppContext from "../../context";
import {Snackbar} from "@material-ui/core";


const App: React.FC = () => {

    const appContext = useContext(AppContext);
    // @ts-ignore
    const { history, snackbarStatus, changeSnackbarStatus, snackbar } = appContext;

    return (
        <MuiThemeProvider theme={theme}>
            <Grid
                container
                className="App"
                direction="column"
                justify="space-between"
                alignItems="center"
            >
                <Grid item>
                    <Snackbar
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                        open={snackbarStatus}
                        autoHideDuration={6000}
                        onClose={changeSnackbarStatus}
                    >
                        <SnackbarContentWrapper variant={snackbar.type} text={snackbar.message} onClose={changeSnackbarStatus} />
                    </Snackbar>
                    <Header />
                </Grid>
                <div className="App-main">
                    <Router history={history}>
                        <Routers />
                    </Router>
                </div>
                <Grid item className="App-footer">
                    <Footer />
                </Grid>
            </Grid>
        </MuiThemeProvider>
    );
};

export default App;
