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
	font-color: ;
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

const ChildCard = ({ errors, touched, values, status }) => {
	const [ child, setChild ] = useState([]);

	useEffect(
		() => {
			status && setChild((person) => [ ...person, status ]);
		},
		[ status ]
	);

	return (
		<Card>
			<Header>
				<h3>Great! You are almost done.</h3>
				<h4>Let's get your child's information below!</h4>
			</Header>
			<Form>
				<Field type="text" name="name" placeholder="Name" value={values.name} />
				{touched.name && errors.name && <p>{errors.name}</p>}

				<label>
					<img src="public/assets/Icon ionic-md-male.svg" alt="Male Icon" />
					<Field type="checkbox" name="male" placeholder="Male" value={values.male} />
				</label>

				<label>
					<img src="public/assets/Icon ionic-md-male.svg" alt="Non-Binary Icon" />
					<Field type="checkbox" name="tbd" value={values.tbd} />
				</label>

				<label>
					<img src="public/assets/Icon ionic-md-male.svg" alt="Female Icon" />
					<Field type="checkbox" name="female" placeholder="Female" value={values.female} />
				</label>

				<Field type="date" name="date" placeholder="Date of Birth (mm/dd/yyyy)" value={values.date} />

				<SecondaryButton>Wrap Up!</SecondaryButton>
			</Form>
		</Card>
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

		Axios.post('', values)
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
