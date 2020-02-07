import React from 'react';
import './App.css';
import {connect} from 'react-redux';
import RouterView from './router';
import {setPet} from './actions/'
import {apiCall} from './utils/apiCall';

function App(props) {

	return (
		<div className="App">
			<RouterView />
		</div>
	);
}

export default connect(state=>{
	return {
		id: state.id
	}
}, {
	setPet
})(App);
