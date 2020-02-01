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
const PrimaryButton = styled.button`
	width: 100%;
	height: 50px;
	border: none;
	border-radius: 15px;
	padding: 0 5px;
	cursor: pointer;
	color: white;
	background: #4864e6;
	margin: 10px 0;
	font-weight: bold;
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
			<h3>Let's get started!</h3>
			<h4>First, let's get your information</h4>
			<Form>
				<Field type="text" name="name" placeholder="Name" value={values.name} />
				{touched.name && errors.name && <p>{errors.name}</p>}

				<Field type="email" name="email" placeholder="Email" value={values.email} />
				{touched.email && errors.email && <p>{errors.email}</p>}

				<Field type="password" name="password" placeholder="Password" value={values.password} />
				{touched.password && errors.password && <p>{errors.password}</p>}

				<Field type="password" name="confirm" placeholder="Confirm Password" value={values.confirm} />
				{touched.confirm && errors.confirm && <p>{errors.confirm}</p>}

				<PrimaryButton type="submit"> Next</PrimaryButton>
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
	}),

	handleSumbit(values, { setStatus, resetForm }) {
		console.log('submitting form:', values);

		Axios.post('', values)
			.then((res) => {
				console.log(res, 'successful');
				setStatus(res);
			})
			.catch((err) => {
				console.log('Error', err);
			});
	}
})(Register);

export default RegForm;
