import React from 'react';
import { Link } from 'react-router-dom';
import { InputStyle, OnboardingButton, OnboardingButtonLine } from '../GeneralStyling';
import { Formik, Form, Field } from 'formik';
import axios from 'axios';

const Nickname = (props) => (
	<div>
		<div className="regPgHeader">
			<h2>You are all set up!</h2>
			<h3 style={{ fontWeight: 'normal' }}>Now let's name your GigaPet and start your journey!</h3>
		</div>
		<Formik
			className="container"
			onSubmit={(values) => {
				axios
					.post('https://gigapetdb.herokuapp.com/auth/register', values)
					.then((res) => {
						localStorage.setItem('token', res.data.token);
					})
					.catch((err) => {
						console.log(err);
					});
			}}
		>
			{({ isSubmitting }) => (
				<Form>
					<Field placeholder="Nickname" style={InputStyle} type="text" name="nickname" />

					<OnboardingButton
						onClick={() => {
							props.history.push('/');
						}}
						type="submit"
					>
						Got to Dashboard
					</OnboardingButton>
				</Form>
			)}
		</Formik>
	</div>
);

export default Nickname;
