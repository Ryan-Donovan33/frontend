import React from "react";
import styled, {keyframes} from "styled-components";
import { connect } from "react-redux";

const Card = styled.div`
  width: 100%;
  background: white;
  padding: 10px 20px;
  box-sizing: border-box;
  background: white;
  box-shadow: 5px 5px 10px 2px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`;

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

const HealthCard = ({ health }) => {

  const InnerBar = styled.div`
    height: 20px;
    background: #4864e6;
    border-radius: 5px;
    max-width: ${health >= 100 ? 100 : health}%;
    transition: 1s;
    animation: 2s ${barGrowth} ease-out;
  `;

  return (
    <Card>
      <Title>Health</Title>
      <BarOutside>
        <InnerBar />
      </BarOutside>
      <Buttons>
        <EntryButton>Add Entry</EntryButton>
        <HistoryButton>View History</HistoryButton>
      </Buttons>
    </Card>
  );
};

export default connect(state => {
  return {
    health: state.gigaPet.health
  };
})(HealthCard);
