import React from "react";
import LoginForm from "./LoginForm";
import { useDispatch } from "react-redux";
import { setLogin } from "../../redux/login-reducer";


function Login(props) {
  // const onSubmit = (formData) => {
  //   console.log(formData);
  // };


  const dispatch = useDispatch();

  const onSubmit = (formData) => {
    dispatch(setLogin(formData.login));
    console.log(formData);
  };

  return (
    <div>
      <h1>Login</h1>
      <LoginForm onSubmit={onSubmit} />
    </div>
  );
}

export default Login;
