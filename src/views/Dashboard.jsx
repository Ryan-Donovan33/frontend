import React from 'react';
import Gigapet from '../components/dashboard/Gigapet';
import HealthCard from '../components/dashboard/HealthCard';
import Navbar from '../components/layout/Navbar';

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

export default Dashboard;
