import React from 'react';
import styled from 'styled-components';


const Background = styled.div`
    background: #4BD6F2;
    height: 300px;
    margin: 20px auto;
    border-radius: 15px;

`

const Title = styled.div`
    font-size: 16px;
    color: white;
    text-align: center;
`

const Gigapet = () =>{

    return (
        <Background className="container">
            <Title>My Gigapet</Title>
        </Background>
    )

};


export default Gigapet;