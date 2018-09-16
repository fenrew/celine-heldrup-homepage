import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import SignUp from "./SignUp"
import SignIn from "./SignIn"
import NotFound from "../NotFound"

class Auth extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/auth/sign-up">
            {SignUp}
          </Route>
          <Route exact path="/auth/sign-in">
            {SignIn}
          </Route>
          <Route>{NotFound}</Route>
        </Switch>
      </div>
    );
  }
}

export default Auth;
