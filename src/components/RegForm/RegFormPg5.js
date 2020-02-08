import React from 'react';
import { InputStyle, OnboardingButton} from '../GeneralStyling';
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
			initialValues={{ nickname: ""}}

			onSubmit={(values) => {
				axios
					.post(`https://gigapetdb.herokuapp.com/auth/user/${localStorage.getItem('user_id')}/pet`, {pet_name: values.nickname})
					.then((res) => {
						localStorage.setItem('pet_id', res.data.token);
						props.history.push('/')
					})
					.catch((err) => {
						console.log(err);
					});
			}}
		>
			{({ isSubmitting }) => (
				<Form>
					<Field placeholder="Nickname" style={InputStyle} type="text" name="nickname" />

					<OnboardingButton type="submit">Got to Dashboard</OnboardingButton>
				</Form>
			)}
		</Formik>
	</div>
);

export default Nickname;
