import React from "react";
import LoginForm from "./LoginForm";
import { useDispatch } from "react-redux";
// import { setLogin } from "../../redux/login-reducer";
import { connect } from "react-redux";
import { login } from "../../redux/auth-reducer";
import { Navigate } from "react-router-dom";





function Login(props) {
  const dispatch = useDispatch();

  // const onSubmit = (formData) => {
  //   // dispatch(setLogin(formData.login));
  //   props.login(formData.login, formData.password , formData.rememberMe);
  //   alert(formData);
  // };
  const onSubmit = (formData) => {
    props.login(formData.login, formData.password, formData.rememberMe);
  };
  if(props.isAuth){
    return  <Navigate to="/profile" />
  }

  
  return (
    <div>
      <h1>Login</h1>
      {/* <LoginForm onSubmit={onSubmit} /> */}
      <LoginForm handleSubmit={onSubmit} />
    </div>
  );
}
const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});
export default connect(mapStateToProps, { login })(Login);


