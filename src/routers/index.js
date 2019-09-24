import React from "react";
import { Switch, Route } from 'react-router'

import Login from '../Containers/Login';
import Auth from '../Containers/Auth';
import SignUp from '../Containers/SignUp';
import SignupSuccess from '../Containers/SignupSuccess';
import ForgottenPassword from '../Containers/ForgottenPassword';
import ForgottenPasswordSuccess from '../Containers/ForgottenPasswordSuccess';
import ResetPassword from '../Containers/ResetPassword';
import NoMatch from '../Components/NoMatch';

export default function Routers() {
    return (
        <Switch>
            <Route exact path="/" component={Login}/>
            <Route path="/auth" component={Auth}/>
            <Route path="/signup" component={SignUp}/>
            <Route path="/signupsuccess" component={SignupSuccess}/>
            <Route path="/forgottenpassword" component={ForgottenPassword}/>
            <Route path="/forgottenpasswordsuccess" component={ForgottenPasswordSuccess}/>
            <Route path="/resetpassword" component={ResetPassword}/>
            <Route component={NoMatch}/>
        </Switch>
    );
}