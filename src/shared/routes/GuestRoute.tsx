import React from "react";
import { useAppSelector } from "app/hooks";
import { Redirect, Route } from "react-router-dom";

type GuestRouteProps = {
  redirectPath?: string;
  path: string;
  component: any;
  exact?: boolean;
};
function GuestRoute({ redirectPath = "/", ...props }: GuestRouteProps) {
  const isLoggedIn = useAppSelector((state) => state.user.isLoggedIn);

  if (isLoggedIn) {
    return <Redirect to={redirectPath} />;
  }
  return <Route {...props} />;
}

export default GuestRoute;
