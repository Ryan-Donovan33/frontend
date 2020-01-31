import React from 'react';
import {connect} from 'react-redux';

import HealthCard from '../components/dashboard/HealthCard';
import Navbar from '../components/layout/Navbar';
import TitleBar from '../components/layout/TitleBar';





function History(){
    return (
        <div className="history">
        <Navbar/>
            <div className="history-content container">
                <TitleBar title="History"/>

        <HealthCard />
            </div>
        </div>
    );
};



export default connect(state=>{
    return {

    }
})(History);