import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GuestRoute from "components/routes/GuestRoute";
import ProtectedRoute from "components/routes/ProtectedRoute";
import AuthLayout from "layouts/AuthLayout";
import Navbar from "components/Navbar";
import Login from "pages/auth/Login";
import Register from "pages/auth/Register";
import Landing from "pages/Landing";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <Route path={["/login", "/register"]}>
            <AuthLayout>
              <GuestRoute path="/login" component={Login} />
              <GuestRoute path="/register" component={Register} />
            </AuthLayout>
          </Route>
        </Route>
        <ProtectedRoute path="/app"></ProtectedRoute>
      </Switch>
    </Router>
  );
}

export default App;
