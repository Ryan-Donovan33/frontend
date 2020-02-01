import React from 'react';
import Gigapet from '../components/dashboard/Gigapet';
import HealthCard from '../components/dashboard/HealthCard';
import Navbar from '../components/layout/Navbar';

const Dashboard = () => {
	return (
		<div className="dashboard">
			<Navbar />
			<div className="container">
				<Gigapet />
				<HealthCard />
			</div>
		</div>
	);
};

export default Dashboard;
