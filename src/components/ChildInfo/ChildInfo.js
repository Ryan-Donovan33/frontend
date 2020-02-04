import React, { useState, useEffect } from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import styled from 'styled-components';
import { OnboardingButton, InputStyle } from '../GeneralStyling';

const FormInput = styled.input`
	width: 100%;
	height: 50px;
	border: 2px solid #4864e6;
	border-radius: 15px;
	padding: 0 5px;
	box-sizing: border-box;
	font-size: 16px;
`;

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
				<h4>Let's get your child's information below!</h4>
			</div>
			<Form>
				<FormInput type="text" name="name" placeholder="Name" value={values.name} />
				{touched.name && errors.name && <p>{errors.name}</p>}

				<label style={{ color: 'white' }}>
					<img src="assets/Icon ionic-md-male.svg" alt="Male Icon" />
					<Field type="checkbox" name="male" placeholder="Male" value={values.male} />
					Male
				</label>

				<label style={{ color: 'white' }}>
					<img src="assets/Icon ionic-ios-arrow-non-binary.svg" alt="Non-Binary Icon" />
					<Field type="checkbox" name="tbd" value={values.tbd} />
					Non-Binary
				</label>

				<label style={{ color: 'white' }}>
					<img src="assets/Icon ionic-md-female.svg" alt="Female Icon" />
					<Field type="checkbox" name="female" placeholder="Female" value={values.female} />
					Female
				</label>

				<FormInput type="date" name="date" placeholder="Date of Birth (mm/dd/yyyy)" value={values.date} />

				<Link to="">
					<OnboardingButton>Wrap Up!</OnboardingButton>
				</Link>
			</Form>
		</div>
	);
};

const ChildInfo = withFormik({
	mapPropsToValues({ users }) {
		return {
			name: users || '',
			tbd: false,
			male: false,
			female: false,
			date: ''
		};
	}

	// validationSchema: Yup.object().shape({
	// 	name: Yup.string().required('Please fill out name'),
	// 	date: Yup.string().required('Please fill out date'),
	// 	tbd: Yup.bool(),
	// 	male: Yup.bool(),
	// 	female: Yup.bool()
	// })
	// handleSubmit(values, { setStatus, resetForm }) {
	// 	console.log('submitting form:', values);

	// 	Axios.post('https://gigapetdb.herokuapp.com/', values)
	// 		.then((res) => {
	// 			console.log('Success:', res);
	// 			setStatus(res.data);
	// 			resetForm();
	// 		})
	// 		.catch((err) => {
	// 			console.log('Error:', err.response);
	// 		});
	// }
})(ChildCard);

export default ChildInfo;
