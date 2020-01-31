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


export default function Navbar(){
    return (
        <Nav>
            <FlexContainer>
            <img src="assets/logo.svg" alt="logo" />
            <img src="assets/Icon ionic-ios-menu.svg" alt="menu" />

            </FlexContainer>
        
        </Nav>
    )
};