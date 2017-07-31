import React, {Component} from 'react';
import Routes from './routes.jsx';
import cssModules from 'react-css-modules';
import styles from './styles/app.scss';
import env from 'env';

class App extends Component {

    constructor(){
        super();
        this.state = {};
    }

    render(){
        return (
            <div styleName='app-container'>
                {Routes}
            </div>
        );
    }
}

var APP = cssModules(App, styles, env.cssModulesOptions);

export default APP;