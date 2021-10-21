import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";

function GuestRoute({ path, component, redirect = "/app" }) {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  if (isLoggedIn) {
    return <Redirect to={redirect} />;
  }
  return <Route path={path} component={component} />;
}

export default GuestRoute;
