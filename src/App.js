import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GuestRoute from "components/routes/GuestRoute";
import ProtectedRoute from "components/routes/ProtectedRoute";
import AuthLayout from "layouts/AuthLayout";
import Navbar from "components/Navbar";
import Login from "pages/auth/Login";
import Register from "pages/auth/Register";
import Landing from "pages/Landing";
import Home from "pages/app/Home";

function App() {
  return (
    <Router>
      <Switch>
        <ProtectedRoute path="/app">
          <Route exact path="/app" component={Home} />
        </ProtectedRoute>
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
      </Switch>
    </Router>
  );
}

export default App;
