import React, { useState, useEffect } from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import Axios from 'axios';
import { OnboardingButton, InputStyle } from '../GeneralStyling';
import styled from 'styled-components';

const FormInput = styled.input`
	width: 100%;
	height: 50px;
	border: 2px solid #4864e6;
	border-radius: 15px;
	padding: 0 5px;
	box-sizing: border-box;
	font-size: 16px;
`;

const Register = ({ errors, touched, values, status, ...props }) => {
	const [ user, setUser ] = useState([]);

	useEffect(
		() => {
			status && setUser((person) => [ ...person, status ]);
		},
		[ status ]
	);
	return (
		<div className="onboarding-1">
			<div style={{ color: 'white' }}>
				<h3>Let's get started!</h3>
				<h4>First, let's get your information</h4>
			</div>
			<Form>
				<FormInput type="text" name="name" placeholder="Name" value={values.name} />
				{touched.name && errors.name && <p>{errors.name}</p>}

				<FormInput type="email" name="email" placeholder="Email" value={values.email} />
				{touched.email && errors.email && <p>{errors.email}</p>}

				<FormInput type="password" name="password" placeholder="Password" value={values.password} />
				{touched.password && errors.password && <p>{errors.password}</p>}

				<FormInput type="password" name="confirm" placeholder="Confirm Password" value={values.confirm} />
				{touched.confirm && errors.confirm && <p>{errors.confirm}</p>}
				<OnboardingButton type="submit">Next</OnboardingButton>
			</Form>
		</div>
	);
};

export default withFormik({
	mapPropsToValues({ users }) {
		//passing props to each field
		return {
			name: users || '',
			email: '',
			password: '',
			confirm: ''
		};
	},

	//validation required - making sure all users fill out each field.
	validationSchema: Yup.object().shape({
		name: Yup.string().required('Please fill in your name!'),
		email: Yup.string().required('Please provide your email!'),
		password: Yup.string().required('Password Required!'),
		confirm: Yup.string().required('Confirm Password!')
	})

	// Don't think I need axios for this but keeping just incase I will need it once we involve the backend

	// handleSumbit(values, { setStatus, resetForm }) {
	// 	console.log('submitting form:', values);

	// 	Axios.post('https://gigapetdb.herokuapp.com/', values)
	// 		.then((res) => {
	// 			console.log(res, 'successful');
	// 			setStatus(res);
	// 			resetForm();
	// 		})
	// 		.catch((err) => {
	// 			console.log('Error', err);
	// 		});
	// }
})(Register);
