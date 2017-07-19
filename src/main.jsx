import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './app.jsx';
import {Provider} from 'react-redux';
import store from './redux/store';
// get app element
var app = document.getElementById("app");
// render to view
render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>, app
);