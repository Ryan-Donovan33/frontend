import React from 'react';
import { Form, Field, withFormik } from 'formik';

const Form = ({ errors, touched, values, status }) => {
	const [ user, setUser ] = useState([]);

	useEffect(
		() => {
			status && setUser((person) => [ ...person, status ]);
		},
		[ status ]
	);
	return (
		<div>
			<h3>Let's get started!</h3>
			<h4>First, let's get your information</h4>
			<Form>
				<Field type="text" name="name" placeholder="Name" value={values.name} />
				{touched.name && errors.name && <p>{errors.name}</p>}

				<Field type="email" name="email" placeholder="Email" value={values.email} />
				{touched.email && errors.email && <p>{errors.email}</p>}

				<Field type="text" name="password" placeholder="Password" value={values.password} />
				{touched.password && errors.password && <p>{errors.password}</p>}

				<Field type="text" name="confirm" placeholder="Confirm Password" value={values.confirm} />
				{touched.confirm && errors.confirm && <p>{errors.confirm}</p>}
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
