import LoginForm from "./LoginForm";
import { connect, ConnectedProps } from "react-redux";
import { login } from "./../../redux/auth-reducer";
import { Navigate } from "react-router-dom";
import { AppStateType } from "../../redux/redux-store";
import { FC } from "react";

type MapStateToPropsType = {
  captchaUrl: string | null;
  isAuth: boolean;
};


const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
  captchaUrl: state.auth.captchaUrl,
  isAuth: state.auth.isAuth,
});

const connector = connect(mapStateToProps, { login });

type PropsFromRedux = ConnectedProps<typeof connector>;

type PropsType = PropsFromRedux & {};

type FormDataType = {
  login: string;
  password: string;
  rememberMe: boolean;
  captcha: string;
};

const Login: FC<PropsType> = (props) => {
  const onSubmit = (formData: FormDataType) => {
    props.login(
      formData.login,
      formData.password,
      formData.rememberMe,
      formData.captcha
    );
  };

  if (props.isAuth) {
    return <Navigate to="/profile" />;
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginForm handleSubmit={onSubmit} captchaUrl={props.captchaUrl} />
    </div>
  );
};

export default connector(Login);
