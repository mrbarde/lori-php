import React from 'react';
import {
    Route, 
    Switch
} from 'react-router-dom';
import Splash from './modules/lori/components/splash.jsx';

export default (
    <Switch>
        <Route exact component={Splash}/>
    </Switch>
);