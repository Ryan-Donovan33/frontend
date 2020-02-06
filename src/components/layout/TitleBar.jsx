import React from "react";
import styled from "styled-components";

const BarContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  margin: 10px 0;
  font-weight: bold;
  color: white;

`;

const BarTitle = styled.div`

    text-align: center;
    
    `;
    
    const BackButton = styled.a`
   cursor: pointer;


`

export default function TitleBar(props) {
  return (
    <BarContent>
      <BackButton onClick={()=>{props.history.goBack()}}><img style={{marginRight: '2px'}} src="/assets/Icon ionic-ios-arrow-back.svg" alt="back arrow"/>Back</BackButton>
      <BarTitle>{props.title}</BarTitle>
      <div></div>
    </BarContent>
  );
}
