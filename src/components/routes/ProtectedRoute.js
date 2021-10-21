import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";

function ProtectedRoute({
  children,
  path,
  component,
  exact = false,
  redirect = "/login",
}) {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  if (!isLoggedIn) {
    return <Redirect to={redirect} />;
  }
  return (
    <Route path={path} exact={exact} component={component}>
      {children}
    </Route>
  );
}

export default ProtectedRoute;
