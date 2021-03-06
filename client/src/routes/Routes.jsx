import React from "react";

import { Route, Switch } from "react-router-dom";

import Home from "../pages/Home";
import Catalog from "../pages/Catalog";
import Product from "../pages/Product";
import Cart from "../pages/Cart";
import Contact from "../pages/Contact";
import PromoCodes from "../pages/PromoCodes";
import SignIn from "../pages/SignIn";
import ErrorPage from "../pages/404";
const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/products/search=:keyword" component={Catalog} />
      <Route path="/product/:slug" component={Product} />
      <Route path="/products" component={Catalog} />
      <Route path="/contact" component={Contact} />
      <Route path="/promo-codes" component={PromoCodes} />
      <Route path="/cart" component={Cart} />
      <Route path="/login" component={SignIn} />
      <Route path="*" exact={true} component={ErrorPage} />
    </Switch>
  );
};

export default Routes;
