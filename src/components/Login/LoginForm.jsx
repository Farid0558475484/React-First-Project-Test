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
          errors.login = "Required Login";
        } else if (values.login.length > 25) {
          errors.login = " Must Login be 25 characters or less";
        } else if (values.login.length < 3) {
          errors.login = " Must Login be 3 characters or more";
        } else if (!values.password) {
          errors.password = " Required Password";
        } else if (values.password.length > 18) {
          errors.password = "Must Password be 18 characters or less";
        } else if (values.password.length < 3) {
          errors.password = "Must Password be 3 characters or more";
        }
        
        return errors;
        
      }}
      onReset={(values, { setErrors, setTouched }) => {
        setErrors({});
        setTouched({});
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
            type="text"
            name="login"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.login}
          />
          <br />
          {errors.login && touched.login && errors.login}
          <br />
          <input
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          <br />
          {errors.password && touched.password && errors.password}
          <br />
          <br />
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  </div>
);

export default LoginForm;
