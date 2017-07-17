import React from 'react';
import {render} from 'react-dom';
import Redux from 'redux';
import {BrowserRouter} from 'react-router-dom';
import Routes from './routes.jsx';
import {Provider} from 'react-redux';
import store from './redux/store';
// get app element
var app = document.getElementById("app");
// render to view
render(
    <BrowserRouter>
        <Provider store={store}>
            {Routes}
        </Provider>
    </BrowserRouter>, app
);