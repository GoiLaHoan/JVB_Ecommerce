import React, { useState, useEffect } from "react";

import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Routes from "../routes/Routes";

export const LoginContext = React.createContext();
export const LoginProvider = (props) => {
  const [status, setStatus] = useState(
    JSON.parse(localStorage.getItem("status"))
  );

  const updateStatus = () => {
    setStatus(!status);
  };
  
  useEffect(() => {
    localStorage.setItem("status", status);
  });

  return (
    <LoginContext.Provider value={{ status, updateStatus }}>
      {props.children}
    </LoginContext.Provider>
  );
};

export const CartContext = React.createContext();
export const CartProvider = (props) => {
  var [total, setTotal] = useState(
    JSON.parse(localStorage.getItem("totalCart"))
  );
  const updateCart = (newQuantity = 0) => {
    setTotal(total + newQuantity);
    localStorage.setItem("totalCart", total + newQuantity);
  };

  return (
    <CartContext.Provider value={{ total, updateCart }}>
      {props.children}
    </CartContext.Provider>
  );
};

const Layout = () => {
  return (
    <LoginProvider>
      <CartProvider>
        <BrowserRouter>
          <Route
            render={(props) => (
              <div>
                <Header />
                <Routes />
                <Footer />
              </div>
            )}
          />
        </BrowserRouter>
      </CartProvider>
    </LoginProvider>
  );
};

export default Layout;
