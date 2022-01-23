import React from "react";
import { Redirect } from "react-router-dom";
import auth from "../utils/auth";

function PrivateRoute(props) {
  return <>{auth() ? props.children : <Redirect to={"/login"} />}</>;
}
export default PrivateRoute;
