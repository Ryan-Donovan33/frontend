import React from 'react';
import Header from '../components/login/Header';
import LoginForm from '../components/login/LoginForm';


export default function Login(){
    return (
        <div className="login-page">
            <div className="container">
            <Header />
            <LoginForm/>

            </div>
    
        </div>
    )
}
