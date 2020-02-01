import React from 'react';
import Navbar from '../components/layout/Navbar';
import ChildInfo from '../components/ChildInfo/ChildInfo';

function ChildPage() {
	return (
		<div>
			<Navbar />
			<div className="container">
				<ChildInfo />
			</div>
		</div>
	);
}

export default ChildPage;
