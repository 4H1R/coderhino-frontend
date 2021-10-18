import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthLayout from "layouts/AuthLayout";
import Navbar from "components/Navbar";
import Login from "pages/auth/Login";
import Register from "pages/auth/Register";
import GuestRoute from "components/routes/GuestRoute";
import ProtectedRoute from "components/routes/ProtectedRoute";
import Home from "pages/Home";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <ProtectedRoute exact path="/" component={Home} />
        <Route path={["/login", "/register"]}>
          <AuthLayout>
            <GuestRoute path="/login" component={Login} />
            <GuestRoute path="/register" component={Register} />
          </AuthLayout>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
