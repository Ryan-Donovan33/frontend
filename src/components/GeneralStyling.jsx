import styled from "styled-components";

const primaryColor = "#4864e6"
const secondaryColor = "#4BD6F2"


export const Card = styled.div`
  width: 100%;
  background: white;
  padding: 10px 20px;
  box-sizing: border-box;
  background: white;
  box-shadow: 5px 5px 10px 2px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`;

export const FormInput = styled.input`
  width: 100%;
  height: 50px;
  border: 2px solid ${primaryColor};
  border-radius: 15px;
  padding: 0 5px;
  box-sizing: border-box;
  font-size: 16px;

`;
export const FormSelect = styled.select`
  width: 100%;
  height: 50px;
  border: 2px solid ${primaryColor};
  border-radius: 15px;
  padding: 0 5px;
  margin: 10px 0;
  background: none;
  font-size: 16px;
`;
export const FormSelectOption = styled.option`

`;

export const PrimaryButton = styled.button`
  width: 100%;
  height: 50px;
  border: none;
  border-radius: 15px;
  padding: 0 5px;
  cursor: pointer;
  color: white;
  background: ${primaryColor};
  margin: 10px 0;
  font-weight: bold;
`;
export const SecondaryButton = styled.button`
  width: 100%;
  height: 50px;
  border: 2px solid ${primaryColor};
  border-radius: 15px;
  padding: 0 5px;
  box-sizing: border-box;
  color: ${primaryColor};
  font-weight: bold;
  background: none;
`;
