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
      initialValues={{ email: "", password: "" }}
      validate={values => {
        const errors = {};
        if (!values.email || !values.password) {
          errors.email = "All fields are required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        return errors;
      }}
      onSubmit={(values) => {
        axios.post("", values)
        .then(res => {
          localStorage.setItem("token", res.data.token);
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
            type="email"
            name="email"
          />
          <Field
            placeholder="Password"
            style={InputStyle}
            type="password"
            name="password"
          />
          <ErrorMessage
            style={{ fontSize: "14px" }}
            name="email"
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
