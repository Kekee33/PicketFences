import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Buyer from "./pages/Buyer/Buyer";
import Realtor from "./pages/Realtor/Realtor";

export default () =>
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/login" exact component={Login} />
    <Route path="/signup" exact component={Signup} />
    <Route path="/buyer" exact component={Buyer} />
    <Route path="/realtor" exact component={Realtor} />
    
  </Switch>;