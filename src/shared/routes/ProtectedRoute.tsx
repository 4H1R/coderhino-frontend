import React from "react";
import { useAppSelector } from "app/hooks";
import { Redirect, Route } from "react-router-dom";

type ProtectedRouteProps = {
  redirectPath?: string;
  path: string;
  exact?: boolean;
  component?: any;
  children?: any;
};

function ProtectedRoute({
  redirectPath = "/login",
  children,
  ...props
}: ProtectedRouteProps) {
  const isLoggedIn = useAppSelector((state) => state.user.isLoggedIn);

  if (!isLoggedIn) {
    return <Redirect to={redirectPath} />;
  }
  return <Route {...props}>{children}</Route>;
}

export default ProtectedRoute;
