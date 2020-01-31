import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

const Background = styled.div`
  background: #4bd6f2;
  height: 300px;
  margin: 20px auto;
  border-radius: 15px;
  padding: 50px 20px;
  box-shadow: 5px 5px 10px 2px rgba(0, 0, 0, 0.2);
`;

const Title = styled.div`
  font-weight: bold !important;
  font-size: 16px;
  letter-spacing: 0.5px;
  color: white;
  text-align: center;
  margin-top: 20px;
`;

const GigaPetBox = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const GigaPetAvatar = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;

const GigaPetFloor = styled.div`
  position: absolute;
  height: 100px;
  width: 100%;
  background: #4864e6;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50px;
  box-shadow: 5px 5px 5px 2px rgba(0, 0, 0, 0.2);
`;

const Gigapet = (props) => {
  return (
    <Background className="container">
      <Title>{props.nickname}</Title>
      <GigaPetBox>
        <GigaPetAvatar src="assets/gigapet-avatar.svg" />
        <GigaPetFloor />
      </GigaPetBox>
    </Background>
  );
};

export default connect(state => {
  return {
    nickname: state.gigaPet.nickname
  };
})(Gigapet);
