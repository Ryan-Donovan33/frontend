import React from 'react';
import Gigapet from '../components/dashboard/Gigapet';
import HealthCard from '../components/dashboard/HealthCard';


const Dashboard = ()=>{
    return (
        <div className="dashboard container">
            <Gigapet/>
            <HealthCard/>
        </div>
    )
}



export default Dashboard

