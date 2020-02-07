import React from "react";
import Gigapet from '../components/dashboard/Gigapet';
import HealthCard from '../components/dashboard/HealthCard';
import Navbar from '../components/layout/Navbar';
import axios from 'axios';

const Dashboard = (props) => {
	axios
			.get('https://gigapetdb.herokuapp.com/auth/:id/pet/:pet_id/')
			.then((res) => (res.data))
			.catch((err) => console.log('error', err));
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

export default Dashboard;
