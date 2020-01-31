import React from 'react';
import { Route } from 'react-router-dom';
import RouteGuard from './routerGuard';

// Import View Here

import Dashboard from '../views/Dashboard';
import History from '../views/History';

export default function RouterView() {
	return (
		<div className="router-view">
			<Route exact path="/" component={Dashboard} />
			<Route exact path="/history" component={History} />
		</div>
	);
}
