import React from "react";
import styled, {keyframes} from "styled-components";
import { connect } from "react-redux";
import {Card} from '../GeneralStyling'

const Title = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

const BarOutside = styled.div`
  height: 20px;
  background: #4bd6f2;
  border-radius: 5px;
  margin: 10px 0;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
`;

const EntryButton = styled.button`
  width: 47%;
  height: 50px;
  border-radius: 15px;
  background: #4864e6;
  color: white;
  border: none;
  font-weight: bold;
`;
const HistoryButton = styled.button`
  width: 47%;
  height: 50px;
  border-radius: 15px;
  border: 2px solid #4864e6;
  background: none;
  color: #4864e6;
  font-weight: bold;
`;

const barGrowth = keyframes`
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
`;

const HealthCard = (props) => {

  const InnerBar = styled.div`
    height: 20px;
    background: #4864e6;
    border-radius: 5px;
    max-width: ${props.health >= 100 ? 100 : props.health}%;
    transition: 1s;
    animation: 2s ${barGrowth} ease-out;
  `;

  return (
    <Card>
      <Title>Health</Title>
      <BarOutside>
        <InnerBar />
      </BarOutside>
      {props.buttons ? 
      <Buttons>
      <EntryButton>Add Entry</EntryButton>
      <HistoryButton onClick={()=>{
        console.log(props)
        props.history.push('/history')
        }}>View History</HistoryButton>
    </Buttons> : '' }
      
    </Card>
  );
};

export default connect(state => {
  return {
    health: state.gigaPet.health
  };
})(HealthCard);
