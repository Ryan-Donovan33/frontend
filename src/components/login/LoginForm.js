import React, { useState }from 'react'
import { withFormik, Form, Field } from 'formik'

import * as yup from 'yup'
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
      mapPropsToValues: (values) => {
        return {
          email: values.email || '',
          password: values.password || '',
        }
      },
      validationSchema: yup.object().shape({
        email: yup.string().required('Email is required!'),
        password: yup.string().required('Password is required!'),
      handleSubmit: (values, { setState }) => {
        console.log(values)
        Axios.post(' ', values)
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log('Error', err)
        })
      }
    })(LoginForm)})