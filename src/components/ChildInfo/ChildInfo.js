import React, { useState, useEffect } from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import Axios from 'axios';

const ChildInfo = ({ errors, touched, values, status }) => {
	const [ child, setChild ] = useState([]);

	useEffect(
		() => {
			status && setChild((person) => [ ...person, status ]);
		},
		[ status ]
	);

	return (
		<div>
			<h3>Great! You are almost done.</h3>
			<h4>Let's get your child's information below!</h4>
			<Form>
				<Field type="text" name="name" placeholder="Name" value={values.name} />
				{touched.name && errors.name && <p>{errors.name}</p>}

				<label>
					<img />
					<Field type="checkbox" name="male" placeholder="Male" value={values.male} />
				</label>

				<label>
					<img />
					<Field type="checkbox" name="non-binary" placeholder="non" value={values.non - binary} />
				</label>

				<label>
					<img />
					<Field type="checkbox" name="female" placeholder="Female" value={values.female} />
				</label>
			</Form>
		</div>
	);
};

export default ChildInfo;
