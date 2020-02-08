import React from 'react';
import {Redirect, Route} from 'react-router-dom';

const publicRoute = ({component: Component, ...rest}) =>{
    let token = localStorage.getItem('token');

    return (
        <Route
        {...rest}
        render={props=>{
            return !token ? <Component {...props} /> : <Redirect to="/"/>
        }}
        />
    )
}

export default publicRoute;