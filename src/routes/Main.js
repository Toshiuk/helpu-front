import React from "react";
import { Switch, Route } from "react-router-dom";

import Login from "../components/login";
import Register from "../components/register";
import ForgotPassword from "../components/forgotPassword";
import Welcome from "../components/welcome";
import EmailSent from "../components/emailSent";
import Tutorial from "../components/tutorial";
import Dashboard from "../components/dashboard";
import SearchVolunteers from "../components/dashboard/features/searchVolunteers/SearchVolunteers";

const Main = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <Route exact path="/register" component={Register} />
    <Route exact path="/password" component={ForgotPassword} />
    <Route exact path="/tutorial" component={Tutorial} />
    <Route exact path="/verification" component={EmailSent} />
    <Route exact path="/dashboard/loading" component={SearchVolunteers} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/" component={Welcome} />
  </Switch>
);

export default Main;
