import React from "react";

import { Route, Switch } from "react-router-dom";
import ErrorPage from "../pages/404";
import AdminUrl from "../pages/AdminUrl";


const RoutesAdmin = () => {
  return (
    <Switch>
      <Route path="/admin" exact component={AdminUrl} />
      <Route path="/" exact component={AdminUrl} />
      <Route path="*" exact={true} component={ErrorPage} />
    </Switch>
  );
};

export default RoutesAdmin;
