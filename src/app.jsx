import React, {Component} from 'react';
import Routes from './routes.jsx';
import cssModules from 'react-css-modules';
import styles from './styles/app.scss';
import Particles from 'react-particles-js';
import env from 'env';

class App extends Component {

    constructor(){
        super();
        this.state = {
            particleStyles: {
				position: 'absolute',
				left: 0,
				top: 0,
				width: '100%',
				height: '100%',
				zIndex: 0,
				opacity: 0.5
			}
        };
    }

    render(){
        var {particleStyles} = this.state;
        return (
            <div styleName='app-container'>
                <Particles style={particleStyles} params={require('./assets/particlesjs-config.json')}/>
                {Routes}
            </div>
        );
    }
}

var APP = cssModules(App, styles, env.cssModulesOptions);

export default APP;