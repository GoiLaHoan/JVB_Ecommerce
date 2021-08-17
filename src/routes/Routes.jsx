import React from "react";

import { Route, Switch } from "react-router-dom";

import Home from "../pages/Home";
import Products from "../pages/Products";
import Product from "../pages/Product";
import Cart from "../pages/Cart";
import Contact from "../pages/Contact";
import PromoCodes from "../pages/PromoCodes";
import SignIn from "../pages/SignIn"
const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/products/:slug" component={Product} />
      <Route path="/products" component={Products} />
      <Route path="/contact" component={Contact} />
      <Route path="/promo-codes" component={PromoCodes} />
      <Route path="/cart" component={Cart} />
      <Route path="/login" component={SignIn} />
     
    </Switch>
  );
};

export default Routes;
