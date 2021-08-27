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
  var [cart, setCart] = useState(
    localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : {
          products: [],
          totalCart: 0,
        }
  );



  const addProductToCart = (code, quantity) => {
    const check = cart.products.findIndex((product) => product.code === code);
    var sumQuantity = 0;
    if (check === -1) {
      cart.products.push({
        code: code,
        quantity: quantity,
      });
      
    } else {
      cart.products[check] = {
        code: code,
        quantity: cart.products[check].quantity + quantity,
      };
    }

    for (let i = 0; i < cart.products.length; i++) {
      sumQuantity += cart.products[i].quantity;
    }
    cart.totalCart = sumQuantity;
    // const listProductsInCart = cart.products;
    // console.log(listProductsInCart);
    // console.log(sumQuantity);
    // console.log(cart);
    // setCart({
    //   product: listProductsInCart,
    //   totalCart: sumQuantity,
    // })
    localStorage.setItem("cart", JSON.stringify(cart));

  };

  const removeProductFromCart = (code) => {
    const check = cart.products.findIndex((product) => product.code === code);
    let sumQuantity = 0;
    if (cart.products[check].code === code) {
      const newListProductInCart = cart.products.filter(
        (product) => product.code !== cart.products[check].code
      );
      for (let i = 0; i < newListProductInCart.length; i++) {
        sumQuantity += newListProductInCart[i].quantity;
      }
      setCart({
        products: newListProductInCart,
        totalCart: sumQuantity,
      });
      cart.products = newListProductInCart;
      cart.totalCart = sumQuantity;
    }

    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const updateCart = (newQuantity = 0) => {
    // setTotal(total + newQuantity);
    // localStorage.setItem("totalCart", total + newQuantity);
  };

  return (
    <CartContext.Provider
      value={{ addProductToCart, updateCart, removeProductFromCart, cart }}
    >
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
