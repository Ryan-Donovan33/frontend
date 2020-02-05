import React from "react";
import {Link} from 'react-router-dom';
import {
  InputStyle,
  OnboardingButton,
  OnboardingButtonLine
} from "../GeneralStyling";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";

const Login = () => (
  <div>
    <Formik
      className="container"
      initialValues={{ username: "", password: "" }}
      validate={values => {
        const errors = {};
        if (!values.username || !values.password) {
          errors.username = "All fields are required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.username)
        ) {
          errors.username = "Invalid email address";
        }
        return errors;
      }}
      onSubmit={(values) => {
        console.log(values)
        axios.post("https://gigapetdb.herokuapp.com/auth/register", values)
        .then(res => {
          console.log(res)
          // localStorage.setItem("token", res.data.token);
        })
        .catch(err=>{
          console.log(err)
        })
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field
            placeholder="Email"
            style={InputStyle}
            type="text"
            name="username"
          />
          <Field
            placeholder="Password"
            style={InputStyle}
            type="password"
            name="password"
          />
          <ErrorMessage
            style={{ fontSize: "14px" }}
            name="username"
            component="div"
          />
          <ErrorMessage
            style={{ fontSize: "14px" }}
            name="password"
            component="div"
          />
          <OnboardingButton type="submit">
            Log In
          </OnboardingButton>
          <Link to="/onboarding-1">
          <OnboardingButtonLine type="button">
            Sign Up
          </OnboardingButtonLine>
          
          </Link>

        </Form>
      )}
    </Formik>
  </div>
);

export default Login;
