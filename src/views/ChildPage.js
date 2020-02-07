import React from 'react';
import ChildInfo from '../components/ChildInfo/ChildInfo';

function ChildPage(props) {
	return (
		<div className="ChildPage">
			<div className="container">
				<ChildInfo {...props} />
			</div>
		</div>
	);
}

export default ChildPage;
