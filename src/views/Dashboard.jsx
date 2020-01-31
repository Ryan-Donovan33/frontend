import React from 'react';
import {connect} from 'react-redux';
import Gigapet from '../components/dashboard/Gigapet';


const Dashboard = (props)=>{
    return (
        <div className="dashboard">
            <Gigapet/>
        </div>
    )
}



export default connect(state=>{
    return {

    }
})(Dashboard)

