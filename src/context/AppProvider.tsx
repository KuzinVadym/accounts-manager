import React from 'react';
import { createBrowserHistory } from "history";

import Service from './Service';
import AppContext from './index'

const history = createBrowserHistory();

class AppProvider extends React.Component {

    componentDidMount(): void {
        Service.init();
        // @ts-ignore
        Service.authSubject.subscribe(
            msg => {
                console.log(msg);
                if (msg.statusCode === undefined || msg.statusCode === 200) {
                    switch (msg.action) {
                        case "ForgotPassword":
                            document.location.href = '/forgottenpasswordsuccess';
                            break;
                        case "CheckEmail":
                            this.setState({emailExists: msg.exists});
                            if (!msg.exists && history.location.pathname === '/') {
                                history.push('/signup');
                            }
                            break;
                        case "Login":
                            const tokenType = sessionStorage.getItem("tt");
                            // @ts-ignore
                            const authToken = JSON.parse(msg.body).AuthenticationResult[tokenType];
                            // @ts-ignore
                            const redirectUrl = sessionStorage ? sessionStorage.getItem("ru").concat(`?at=${authToken}`) : "#";
                            if (redirectUrl) document.location.href = redirectUrl;
                            break;
                        case "ConfirmForgotPassword":
                            document.location.href = '/';
                            const newSnackbar = Object.assign({}, {type: 'success', message: 'Your password was successfully changed'});
                            this.state.changeSnackbar(newSnackbar);
                            this.state.changeSnackbarStatus();
                            break;

                        default:
                            console.log('default');
                            console.log(msg);
                            if (msg.message === "Forbidden") {
                                console.log("Something went wrong");
                            } else {
                                if (JSON.parse(msg.body)['UserConfirmed'] !== undefined) document.location.href = '/signupsuccess';
                            }
                    }
                } else {
                    if (msg.statusCode === 400) {
                        console.log('statusCode - 400');
                        const message = JSON.parse(msg.body).message;
                        const newSnackbar = Object.assign({}, {type: 'error', message: message});
                        this.state.changeSnackbar(newSnackbar);
                        this.state.changeSnackbarStatus();
                    } else {
                        console.log(msg);
                    }
                }

            },
            err => console.log(err),
            () => console.log('complete')
        );
        // @ts-ignore
        Service.creationSubject.subscribe(
            msg => {
                console.log(msg);
                if (msg.statusCode === undefined || msg.statusCode === 200) {
                    switch (msg.action) {
                        case "Signup":
                            document.location.href = '/signupsuccess';
                            break;
                        case "ConfirmSignUp":
                            console.log("ConfirmSignUp");
                            break;
                        default:
                            console.log('default');
                            console.log(msg);
                            if (msg.message === "Forbidden") {
                                console.log("Something went wrong");
                            } else {
                                if (JSON.parse(msg.body)['UserConfirmed'] !== undefined) document.location.href = '/signupsuccess';
                            }
                    }
                } else {
                    if (msg.statusCode === 400) {
                        console.log('statusCode - 400');
                        const message = JSON.parse(msg.body).message;
                        const newSnackbar = Object.assign({}, {type: 'error', message: message});
                        this.state.changeSnackbar(newSnackbar);
                        this.state.changeSnackbarStatus();
                    } else {
                        console.log(msg);
                    }
                }

            },
            err => console.log(err),
            () => console.log('complete')
        );
    }

    state = {
        history: history,
        user: {email: '', password: '', passwordConfirmation: '', userId: undefined, confirmationCode: undefined},
        //user: {email: 'onboarding-test@beluto.com', password: 'General#123', passwordConfirmation: ''},
        changeUser: (user: any) => {
            this.setState({user: user});
        },
        emailConfirmation: '',
        changeEmailConfirmation: (value: string) => {
            this.setState({emailConfirmation: value});
        },
        snackbar: {
            message: '',
            type: 'info'
        },
        changeSnackbar: (snackbar: any) => {
            this.setState({snackbar: snackbar});
        },
        snackbarStatus: false,
        changeSnackbarStatus: () => {
            this.setState({snackbarStatus: !this.state.snackbarStatus});
        },
        emailExists: false,
        checkEmail: (email: string) => {
            if (Service.authSubject) Service.authSubject.next({action: 'CheckEmail', email: email});
        },
        login: () => {
            if (Service.authSubject) Service.authSubject.next({action: 'Login', email: this.state.user.email, password: this.state.user.password});
        },
        signUp: () => {
            const redirectUrl = sessionStorage.getItem("ru");
            if (redirectUrl) {
                if (Service.creationSubject) Service.creationSubject.next({action: 'Signup', email: this.state.user.email, password: this.state.user.password, signupUrl: redirectUrl});
            } else {
                const newSnackbar = Object.assign({}, {type: 'error', message: "Unsuported usage"});
                this.state.changeSnackbar(newSnackbar);
                this.state.changeSnackbarStatus();
            }
        },
        forgotPassword: ({ email }: any) => {
            if (Service.authSubject) Service.authSubject.next({ action: 'ForgotPassword', userId: email });
        },
        resetPassword: () => {
            if (Service.authSubject) Service.authSubject.next({ action: 'ConfirmForgotPassword', userId: this.state.user.userId,
                confirmationCode: this.state.user.confirmationCode, password: this.state.user.password });
    },
    };

    render() {
        return (
            <AppContext.Provider value={this.state}>
                {this.props.children}
            </AppContext.Provider>
        );
    }
}

export default AppProvider;