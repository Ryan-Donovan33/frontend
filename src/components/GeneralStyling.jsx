import styled from 'styled-components';

export const primaryColor = '#4864e6';
export const secondaryColor = '#4BD6F2';

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
export const FormSelectOption = styled.option``;

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
	border-radius: 10px;
	padding: 0 5px;
	box-sizing: border-box;
	color: ${primaryColor};
	font-weight: bold;
	background: none;
`;
export const OnboardingButtonLine = styled.button`
  width: 100%;
  height: 50px;
  border: 2px solid white;
  border-radius: 10px;
  padding: 0 5px;
  box-sizing: border-box;
  color: white;
  font-weight: bold;
  background: none;
`;
export const OnboardingButton = styled.button`
	width: 100%;
	height: 50px;
	border: none;
	border-radius: 10px;
	padding: 0 5px;
	box-sizing: border-box;
	color: ${primaryColor};
	font-weight: bold;
	background: white;
	margin: 10px 0;
`;

export const InputStyle = {
	width: '100%',
	height: '50px',
	border: 'none',
	borderRadius: '10px',
	padding: '0 5px',
	boxSizing: 'border-box',
	fontSize: '16px',
	background: 'rgba(255,255,255,0.6)',
	color: 'white',
	margin: '10px 0'
};

export const IconStyle = {
	width: '30%',
	height: '35px',
	padding: '0 5px',
	color: 'white'
};
