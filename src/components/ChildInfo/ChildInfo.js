import React, { useState, useEffect } from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import Axios from 'axios';
import styled from 'styled-components';
import { OnboardingButton, InputStyle, IconStyle } from '../GeneralStyling';

const LabelFlex = styled.div`
	display: flex;
	padding: 10px;
`;

const ChildCard = ({ errors, touched, values, status, ...props }) => {
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
				<Field style={InputStyle} type="text" name="name" placeholder="Name" value={values.name} />
				{touched.name && errors.name && <p>{errors.name}</p>}

				<LabelFlex>
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
						{/* If i want to hide the checkbox I can use style={{ display: 'none' }} however, not sure how to make img change color once selected. Right now it is functional */}
						Female
					</label>
				</LabelFlex>
				<Field
					style={InputStyle}
					type="date"
					name="date"
					// placeholder="Date of Birth (mm/dd/yyyy)"
					value={values.date}
				/>

				<OnboardingButton
					onClick={() => {
						props.history.push('/finalRegStep');
					}}
					type="submit"
				>
					Wrap Up!
				</OnboardingButton>
			</Form>

			{child.map((el) => (
				<ul>
					<li>name: {el.name}</li>
					<li>date: {el.date}</li>
				</ul>
			))}
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
				console.log('Error:', err);
			});
	}
})(ChildCard);

export default ChildInfo;
