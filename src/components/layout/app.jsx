import React from 'react';
import Header from './header.jsx';
import Footer from './footer.jsx';

class App extends React.Component {

	constructor(){
		super();
	}

	render(){
		return(
			<div>
				<Header/>
					<div>
						{this.props.children}
					</div>
				<Footer/>				
			</div>
		)
	}
}

export default App;