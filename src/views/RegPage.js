import React from 'react';
import RegForm from '../components/RegForm/RegForm';

function RegPage(props) {
	return (
		<div className="RegPage">
			<div className="container">
				<RegForm {...props} />
			</div>
		</div>
	);
}

export default RegPage;
