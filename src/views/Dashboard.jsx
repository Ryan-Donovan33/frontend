import React, {useEffect} from "react";
import Gigapet from '../components/dashboard/Gigapet';
import HealthCard from '../components/dashboard/HealthCard';
import Navbar from '../components/layout/Navbar';
import {connect} from 'react-redux';
import {apiCall} from '../utils/apiCall'; 
import {getPetInfo} from '../actions'

const Dashboard = ({id, pet_id,...props}) => {
	
	useEffect(()=>{
		apiCall().get(`/auth/${id}/pet/${pet_id}/`)
		.then(res=>{
			console.log(res);
			props.getPetInfo(res.data)
		})
		.catch(err=>{
			console.log(err)
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
}, {getPetInfo})(Dashboard);
