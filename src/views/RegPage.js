import React from 'react';
import Navbar from '../components/layout/Navbar';
import RegForm from '../components/RegForm/RegForm';

function RegPage() {
	return (
		<div className="RegPage">
			<div className="container">
				<RegForm />
			</div>
		</div>
	);
}

export default RegPage;
