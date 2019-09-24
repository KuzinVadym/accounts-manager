import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'

import AppProvider from './context/AppProvider';
import App from './Containers/App';

import './location'
import './i18n';
import './index.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <BrowserRouter
        basename='/'
        forceRefresh={false}
    >
        <AppProvider>
            <App />
        </AppProvider>
    </BrowserRouter>
    , document.getElementById('root'));

serviceWorker.unregister();
