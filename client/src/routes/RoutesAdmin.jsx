import React from "react";

import { Route, Switch } from "react-router-dom";
import ErrorPage from "../pages/404";
import Admin from "../pages/Admin";


const RoutesAdmin = () => {
  return (
    <Switch>
      <Route path="/admin" exact component={Admin} />
      <Route path="/" exact component={Admin} />
      <Route path="*" exact={true} component={ErrorPage} />
    </Switch>
  );
};

export default RoutesAdmin;
