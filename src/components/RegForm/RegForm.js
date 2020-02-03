import React, { useState, useEffect } from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import Axios from 'axios';
import styled from 'styled-components';

const Card = styled.div`
	width: 100%;
	background: white;
	padding: 10px 20px;
	box-sizing: border-box;
	background: white;
	box-shadow: 5px 5px 10px 2px rgba(0, 0, 0, 0.2);
	border-radius: 10px;
`;
const SecondaryButton = styled.button`
	width: 100%;
	height: 50px;
	border: 2px solid #4864e6;
	border-radius: 15px;
	padding: 0 5px;
	box-sizing: border-box;
	color: #4864e6;
	font-weight: bold;
	font-size: 20px;
	background: none;
`;

const Header = styled.div`color: #4864e6;`;

const FormInput = styled.input`
	width: 100%;
	height: 50px;
	border: 2px solid #4864e6;
	border-radius: 15px;
	padding: 0 5px;
	box-sizing: border-box;
	font-size: 16px;
`;

const Register = ({ errors, touched, values, status }) => {
	const [ user, setUser ] = useState([]);

	useEffect(
		() => {
			status && setUser((person) => [ ...person, status ]);
		},
		[ status ]
	);
	return (
		<Card>
			<Header>
				<h3>Let's get started!</h3>
				<h4>First, let's get your information</h4>
			</Header>
			<Form>
				<FormInput type="text" name="name" placeholder="Name" value={values.name} />
				{touched.name && errors.name && <p>{errors.name}</p>}

				<FormInput type="email" name="email" placeholder="Email" value={values.email} />
				{touched.email && errors.email && <p>{errors.email}</p>}

				<FormInput type="password" name="password" placeholder="Password" value={values.password} />
				{touched.password && errors.password && <p>{errors.password}</p>}

				<FormInput type="password" name="confirm" placeholder="Confirm Password" value={values.confirm} />
				{touched.confirm && errors.confirm && <p>{errors.confirm}</p>}

				<SecondaryButton type="submit"> Next</SecondaryButton>
			</Form>
		</Card>
	);
};

const RegForm = withFormik({
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

	// 	Axios.post('', values)
	// 		.then((res) => {
	// 			console.log(res, 'successful');
	// 			setStatus(res);
	// 		})
	// 		.catch((err) => {
	// 			console.log('Error', err);
	// 		});
	// }
})(Register);

export default RegForm;
