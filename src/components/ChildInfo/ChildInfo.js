import React, { useState, useEffect } from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import styled from 'styled-components';
import { OnboardingButton, InputStyle, IconStyle } from '../GeneralStyling';

const FormInput = styled.input`
	width: 100%;
	height: 50px;
	border: 2px solid #4864e6;
	border-radius: 15px;
	padding: 0 5px;
	box-sizing: border-box;
	font-size: 16px;
`;

const Checkbox = (props) => {
	return <div className={props.selected ? 'selected' : 'not-selected'} />;
};

const ChildCard = ({ errors, touched, values, status }) => {
	const [ child, setChild ] = useState([]);

	useEffect(
		() => {
			status && setChild((person) => [ ...person, status ]);
		},
		[ status ]
	);

	return (
		<div className="onboarding-1">
			<div style={{ color: 'white' }}>
				<h3>Great! You are almost done.</h3>
				<h4 style={{ fontWeight: 'normal' }}>Let's get your child's information below!</h4>
			</div>
			<Form>
				<input style={InputStyle} type="text" name="name" placeholder="Name" value={values.name} />
				{touched.name && errors.name && <p>{errors.name}</p>}

				<label style={IconStyle}>
					<img src="assets/Icon ionic-md-male.svg" alt="Male Icon" />
					<input type="checkbox" name="male" value={values.male} />
					Male
				</label>

				<label style={IconStyle}>
					<img src="assets/Icon ionic-ios-arrow-non-binary.svg" alt="Non-Binary Icon" />
					<input type="checkbox" name="nb" value={values.nb} />
					Non-Binary
				</label>

				<label style={IconStyle}>
					<img src="assets/Icon ionic-md-female.svg" alt="Female Icon" />
					<input type="checkbox" name="female" value={values.female} />
					Female
				</label>

				<Field
					style={InputStyle}
					type="date"
					name="date"
					// placeholder="Date of Birth (mm/dd/yyyy)"
					value={values.date}
				/>

				<Link to="/finalRegStep">
					<OnboardingButton>Wrap Up!</OnboardingButton>
				</Link>
			</Form>
		</div>
	);
};
//using higher order component

const ChildInfo = withFormik({
	mapPropsToValues({ users }) {
		return {
			name: users || '',
			nb: false,
			male: false,
			female: false,
			date: ''
		};
	},

	validationSchema: Yup.object().shape({
		name: Yup.string().required('Please fill out name'),
		date: Yup.string().required('Please fill out date'),
		tbd: Yup.bool(),
		male: Yup.bool(),
		female: Yup.bool()
	}),

	handleSubmit(values, { setStatus, resetForm }) {
		console.log('submitting form:', values);

		Axios.post('https://gigapetdb.herokuapp.com/auth/register', values)
			.then((res) => {
				console.log('Success:', res);
				setStatus(res.data);
				resetForm();
			})
			.catch((err) => {
				console.log('Error:', err.response);
			});
	}
})(ChildCard);

export default ChildInfo;
