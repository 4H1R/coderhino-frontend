import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GuestRoute from "shared/routes/GuestRoute";
import ProtectedRoute from "shared/routes/ProtectedRoute";
import AuthLayout from "layouts/AuthLayout";
import {
  aboutPath,
  appBasePath,
  appHomePath,
  appInvitesListPath,
  appMePath,
  appServersCreatePath,
  blogPath,
  landingPath,
  loginPath,
  registerPath,
  appUserProfileInfoPath
} from "app/paths";
import Navbar from "components/Navbar";
import Login from "pages/auth/Login";
import Register from "pages/auth/Register";
import Landing from "pages/Landing";
import About from "pages/About";
import Home from "pages/app/Home";
import Me from "pages/app/Me";
import { default as ServersCreate } from "pages/app/servers/Create";
import Error404 from "pages/errors/Error404";
import Blog from "pages/Blog";
import InvitesList from "pages/app/invites/InvitesList";
import UserProfileInfo from "pages/app/userprofile/UserProfileInfo";

function App() {
  return (
    <Router>
      <Switch>
        <ProtectedRoute path={appBasePath()}>
          <Route exact path={appHomePath()} component={Home} />
          <Route exact path={appMePath()} component={Me} />
          <Route
            exact
            path={appServersCreatePath()}
            component={ServersCreate}
          />
          <Route
            exact
            path={appInvitesListPath()}
            component={InvitesList}
          />
          <Route
            exact
            path={appUserProfileInfoPath()}
            component={UserProfileInfo}
          />
        </ProtectedRoute>
        <Route path="/">
          <Navbar />
          <Switch>
            <Route exact path={landingPath()} component={Landing} />
            <Route exact path={aboutPath()} component={About} />
            <Route exact path={blogPath()} component={Blog} />
            <Route path={[loginPath(), registerPath()]}>
              <AuthLayout>
                <GuestRoute path={loginPath()} component={Login} />
                <GuestRoute path={registerPath()} component={Register} />
              </AuthLayout>
            </Route>
            <Route path="*" component={Error404} />
          </Switch>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
