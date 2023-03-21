import React from "react";
import { Link } from "react-router-dom";
import s from "./Header.module.scss";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <div className={s.header}>
      <Link to="/profile">
        <img
          src="data:image/png;base64,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"
          alt="logo"
        />
      </Link>

      <div className={s.loginBlokck}>
        {props.isAuth 
        ?  <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
        : <NavLink to="/login">Login</NavLink>}
      </div>
    </div>
  );
};

export default Header;
