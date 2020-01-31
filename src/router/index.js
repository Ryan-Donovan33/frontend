import React from 'react';
import {Route} from 'react-router-dom';
import RouteGuard from './routerGuard';


// Import View Here

import Dashboard from '../views/Dashboard';

export default function RouterView(){
    return (
        <div className="router-view">
            <Route to="/" component={Dashboard} />
        </div>
    )
}