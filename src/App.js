import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthLayout from "layouts/AuthLayout";
import Navbar from "components/Navbar";
import Login from "pages/auth/Login";
import Register from "pages/auth/Register";

function App() {
  return (
    <Router>
      <Switch>
        <Route path={["/login", "/register"]}>
          <Navbar />
          <AuthLayout>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
          </AuthLayout>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
