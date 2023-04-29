import React from "react";
import { Navigate } from "react-router-dom";

function News(props) {
  if (!props.isAuth) return <Navigate to={"/login"} />;
  return <div>News</div>;
}

export default News;
