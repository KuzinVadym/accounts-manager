import React, { useState, useContext } from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";

import { useTranslation } from 'react-i18next';
import injectSheet from 'react-jss';
import AppContext from "../../context";

import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';

import InputField from '../../Components/InputField';

import { validateUserName } from './validation'
import FormHeader from "../../Components/FormHeader";
import Login from "../Login";
import SignUp from "../SignUp";
import SignupSuccess from "../SignupSuccess";
import ForgottenPassword from "../ForgottenPassword";
import ForgottenPasswordSuccess from "../ForgottenPasswordSuccess";
import ResetPassword from "../ResetPassword";
import NoMatch from "../../Components/NoMatch";


const styles = (theme: any) => {
    return {
        main: {
            width: "35vw",
            minWidth: "450px",
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
    classes: any,
    history: any
}
export interface TopicProps {
    match: any
}

function Topic({ match }: TopicProps) {
    return (
        <div>
            <h3>{match.params.topicId}</h3>
        </div>
    );
}

const Auth = ({classes, history}: Props) => {
    const appContext = useContext(AppContext);
    const [userNameValidStatus, setUserNameValidStatusHandler] = useState(true);

    // @ts-ignore
    const {user, changeUser, checkEmail} = appContext;
    const [t, i18n] = useTranslation();


    function onBlurNameHandler(e: any) {
        setUserNameValidStatusHandler(validateUserName(e.target.value));
        if (validateUserName(e.target.value)) {
            checkEmail(user.email);
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
                topMessage="Login"
                mainMessage={true ? 'Welcome back' : 'Welcome'}
                bottomMessage="Forgot Password?"
                tipMessage="You can always reset your password. We will send you a link to your verified e-mail address."
            />
        </Grid>
        <Grid item className={classes.gridItem}>
            <InputField
                id="user_name_input"
                label="E-mail"
                type="email"
                value={user.email}
                onChange={(value: string) => changeUser(Object.assign(user, {email: value}))}
                valid={userNameValidStatus}
                onFocus={() => setUserNameValidStatusHandler(true)}
                onBlur={(e: any) => onBlurNameHandler(e)}
            />
        </Grid>
        <Grid item className={classes.gridItem}>
            <Switch>
                <Route path="/auth/:topicId" component={Topic}/>
            </Switch>
        </Grid>
    </Grid>;
};

export default injectSheet(styles)(Auth);