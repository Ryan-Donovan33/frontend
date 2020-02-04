import React, { useState }from 'react'
import { withFormik, Form, Field } from 'formik'

import * as Yup from 'yup'
import Axios from 'axios';

const LoginForm = ( { errors, touched, status }) => {
      console.log(status)
      const [loginUser, setloginUser] = useState([])
      return (
        <Form>

          {touched.email && errors.email && <p className="error">{errors.email}</p>}
          <Field type="email" name="email" placeholder="Email"/>

          {touched.password && errors.password && <p className="error">{errors.password}</p>}
          <Field type="password" name="password" placeholder="Password"/>
    
          <button type="submit">Sign in</button>
          <button type="submit">Sign up</button>
        </Form>
      )
    }
    
    export default withFormik({
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
        email: Yup.string().required('Please provide your email!'),
        password: Yup.string().required('Password Required!'),
      }),
      handleSumbit(values, { setloginUser }) {
        console.log('submitting form:', values);
    
        Axios.post('', values)
          .then((res) => {
            console.log(res, 'successful');
            setloginUser(res);
          })
          .catch((err) => {
            console.log('Error', err);
          });
      }
    
    })(LoginForm);