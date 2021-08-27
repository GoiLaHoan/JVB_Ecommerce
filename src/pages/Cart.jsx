import React from "react";

import Helmet from "../components/Helmet";

import ProductsInCart from "../components/ProductsInCart";

const Cart = () => {
  return (
    <Helmet title="Cart">
      <div className="container">
        <div className="main">
          <div className="cart" style={{ padding: "48px 0px" }}>
            <div className="cart__title" style={{ marginBottom: "12px" }}>
              <h1
                className="cart__title_style"
                style={{ fontWeight: "500", fontSize: "2.25em" }}
              >
                Giỏ hàng
              </h1>
            </div>
            <div className="cart__content">
                <div className="cart__products">
                  <ProductsInCart />
                </div>
                <div className="cart__checkout">
                  Thanh Toán
                </div>
            </div>
          </div>
        </div>
      </div>
    </Helmet>
  );
};

export default Cart;
