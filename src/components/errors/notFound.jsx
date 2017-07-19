import React from 'react';
import cssModules from 'react-css-modules';
import styles from '../../styles/notFound.css';
import {Link, withRouter} from 'react-router-dom'
import env from 'env';

class NotFound extends React.Component{

	constructor(){
		super();
	}

	render(){
		var {history} = this.props;

		return(
			<div styleName="not_found">
				<div styleName="box_center">
					<div styleName="box">
						<h1 styleName="code">{'404'}</h1>
						<p styleName="message">
							{'The page or file you are looking for has either been removed or does not exist.'} 
						</p>
						<div styleName="links">
							<a href="javascript:;" onClick={history.goBack} styleName="link_item">&larr;<br/>Go Back</a>
							<span styleName="span_item">
								or
							</span>
							<Link to="/" styleName="link_item"><i className="fa fa-home"></i><br/>Go Home</Link>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

// export component
export default withRouter(cssModules(NotFound, styles, env.cssModulesOptions));