import React, {useEffect} from "react";
import Gigapet from '../components/dashboard/Gigapet';
import HealthCard from '../components/dashboard/HealthCard';
import Navbar from '../components/layout/Navbar';
import {connect} from 'react-redux';
import {apiCall} from '../utils/apiCall'; 
import {setPet, getPetInfo} from '../actions'

const Dashboard = (props) => {
	
	useEffect(()=>{

		const uid = localStorage.getItem('user_id');
		apiCall().get(`auth/user/${uid}`)
		.then(res=>{
			props.setPet(res.data.pet_id)
			apiCall().get(`/auth/user/${props.id}/pet/${res.data.pet_id}/`)
			.then(res=>{
				props.getPetInfo(res.data)
			})
			.catch(err=>{
				console.log(err)
			})


		})

	}, [])
	
	return (
		<div className="dashboard">
			<Navbar />
			<div className="container">
				<Gigapet />
				<HealthCard buttons {...props} />
			</div>
		</div>
	);
};

export default connect(state=>{
	return {
		id: state.id,
		pet_id: state.pet_id
	}
}, {getPetInfo, setPet})(Dashboard);
