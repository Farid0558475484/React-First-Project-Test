import React from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { AppStateType } from "../../redux/redux-store";

type MapStateToPropsType = {
  isAuth: boolean;
};

type OwnPropsType = {
  //props specific to the wrapped component
};

type PropsType = MapStateToPropsType & OwnPropsType;

const mapStateToPropsForNavigate = (
  state: AppStateType
): MapStateToPropsType => {
  return {
    isAuth: state.auth.isAuth,
  };
};

const AuthNavigate = (Component: React.ComponentType<PropsType>) => {
  const NavigateComponent: React.FC<PropsType> = (props) => {
    if (!props.isAuth) return <Navigate to={"/login"} />;
    return <Component {...props} />;
  };

  const ConnectedAuthNavigateComponent = connect(mapStateToPropsForNavigate)(
    NavigateComponent
  );
  return ConnectedAuthNavigateComponent;
};

export default AuthNavigate;
