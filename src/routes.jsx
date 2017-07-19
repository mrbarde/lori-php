import React from 'react';
import {
    Route, 
    Switch
} from 'react-router-dom';
import Routes from './configs/routes.config';
import Home from './components/home/home.jsx';
import NotFound from './components/errors/notFound.jsx';

export default (
    <Switch>
        <Route exact path={Routes.HOME} component={Home}/>
        <Route component={NotFound}/>
    </Switch>
);