import React from 'react';
import styled from 'styled-components';



const Nav = styled.nav`
    height: 80px;
    // background: #4864E6;
`

const FlexContainer = styled.div`
    max-width: 90%;
    justify-content: space-between;
    align-content: center;
    display: flex;
    margin: 0 auto;
    height: 100%;

`


export default function Navbar(props){
    return (
        <Nav>
            <FlexContainer>
            <img src="/assets/logo.svg" alt="logo" />
            <p onClick={()=>{
                localStorage.removeItem('token');
                localStorage.removeItem('user_id');
                window.location.reload();
                
            }}  style={{color: 'white', fontWeight: 'bold', padding: '15px 0', cursor: 'pointer'}} className="logout">Log out</p>
             

            </FlexContainer>
        
        </Nav>
    )
};