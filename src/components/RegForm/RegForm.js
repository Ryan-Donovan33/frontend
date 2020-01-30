import React from 'react';
import { Form, Field, withFormik } from 'formik';

const Form = ({ errors, touched, values, status }) => {
	return (
		<div>
			<h3>Let's get started!</h3>
			<h4>First, let's get your information</h4>
			<Form>
				<Field />
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
	}
})(Form);

export default RegForm;
