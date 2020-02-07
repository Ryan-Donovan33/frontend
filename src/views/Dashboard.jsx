import React from "react";
import Gigapet from '../components/dashboard/Gigapet';
import HealthCard from '../components/dashboard/HealthCard';
import Navbar from '../components/layout/Navbar';
import {connect} from 'react-redux';
import {setPet, getPetInfo} from '../actions'

const Dashboard = (props) => {	
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
