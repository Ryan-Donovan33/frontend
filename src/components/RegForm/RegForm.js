import React, { useState, useEffect } from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import Axios from 'axios';
import styled from 'styled-components';
import {PrimaryButton, primaryColor} from '../GeneralStyling';


const InputStyle = {
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
}


const Register = ({ errors, touched, values, status }) => {
	const [ user, setUser ] = useState([]);

	useEffect(
		() => {
			status && setUser((person) => [ ...person, status ]);
		},
		[ status ]
	);
	return (
		<div className="onboarding-1">
			<div style={{color: 'white'}}>
				<h3>Let's get started!</h3>
				<h4>First, let's get your information</h4>
			</div>
			<Form>
				<Field style={InputStyle} type="text" name="name" placeholder="Name" value={values.name} />
				{touched.name && errors.name && <p>{errors.name}</p>}

				<Field style={InputStyle} type="email" name="email" placeholder="Email" value={values.email} />
				{touched.email && errors.email && <p>{errors.email}</p>}

				<Field style={InputStyle} type="password" name="password" placeholder="Password" value={values.password} />
				{touched.password && errors.password && <p>{errors.password}</p>}

				<Field style={InputStyle} type="password" name="confirm" placeholder="Confirm Password" value={values.confirm} />
				{touched.confirm && errors.confirm && <p>{errors.confirm}</p>}
				<PrimaryButton>Next</PrimaryButton>
			</Form>
		</div>
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
