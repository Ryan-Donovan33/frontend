import React, {useEffect} from 'react';
import './App.css';
import {connect} from 'react-redux';
import RouterView from './router';
import {getPetInfo} from './actions/'
import {apiCall} from './utils/apiCall';

function App(props) {
	
	useEffect(()=>{
		const token = localStorage.getItem('token');
		const uid = localStorage.getItem('user_id');
		if (token && uid){
			apiCall().get(`auth/user/${uid}`)
			.then(res=>{
				apiCall().get(`/auth/user/${props.id}/pet/${res.data.pet_id}/`)
				.then(res=>{
					props.getPetInfo(res.data)
				})
				.catch(err=>{
					console.log(err)
				})
	
	
			})

		}

	}, [props]) 


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
	getPetInfo
})(App);
