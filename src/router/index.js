import React from 'react';
import { Route } from 'react-router-dom';
import RouteGuard from './routerGuard';
import PublicRoute from './publicRoute';

// Import View Here

import Dashboard from '../views/Dashboard';
import History from '../views/History';
import AddEntry from '../views/AddEntry';
import RegPage from '../views/RegPage';
import ChildPage from '../views/ChildPage';
import LoginPage from '../views/LoginPage';
import RegLastPg from '../views/RegLastPage';
import UpdateEntry from '../views/UpdateEntry';

export default function RouterView() {
	return (
		<div className="router-view">
			<RouteGuard exact path="/" component={Dashboard} />
			<RouteGuard exact path="/history" component={History} />
			<RouteGuard exact path="/add" component={AddEntry} />
			<RouteGuard path="/update/:id" component={UpdateEntry} />
			<PublicRoute path="/login" component={LoginPage} />
			<PublicRoute path="/onboarding-1" component={RegPage} />
			<RouteGuard path="/childinfo" component={ChildPage} />
			<Route path="/finalRegStep" component={RegLastPg} />
		</div>
	);
}
