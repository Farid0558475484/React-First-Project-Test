import React from "react";
import { Formik } from "formik";

const LoginForm = (props) => (
  <div>
    <h1>Login</h1>
    <Formik
      onSubmit={props.handleSubmit}
      initialValues={{ login: "", password: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.login) {
          errors.login = "Required login";
        } else if (values.login.length  > 18) {
          errors.login = "login be 15 characters or less";
        } else if (values.login.length < 3) {
          errors.login = "login be 15 characters or more";
        }else if (!values.password){
          errors.password = "Required password";
        }else if (values.password.length  > 18) {
          errors.password = "password be 15 characters or less";
        } else if (values.password.length < 3) {
          errors.password = "password be 15 characters or more";
        }
        return errors;
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          <input
            type="login"
            name="login"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.login}
          /><br/>
          {errors.login && touched.login && errors.login}
          <br/>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          /><br/>
          {errors.password && touched.password && errors.password}
          <br/><br/> 
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  </div>
);

export default LoginForm;
