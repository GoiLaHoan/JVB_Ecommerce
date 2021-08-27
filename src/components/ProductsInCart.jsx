import React, { useContext } from "react";

import { CartContext } from "../components/Layout";
import productData from "../assets/fake-data/products";
import numberWithCommas from "../utils/numberWithCommas";
import { Link } from "react-router-dom";

const ProductsInCart = (props) => {
  const { cart, removeProductFromCart } = useContext(CartContext);
  const productList = productData.getAllProducts();

  const cartProducts = cart.products.map((product, i) => product.code);

  const cartProductsQuantity = cart.products.map(
    (product, i) => product.quantity
  );
  var ListProductsInCart = [];
  for (let i = 0; i < productList.length; i++) {
    for (let j = 0; j < cartProducts.length; j++) {
      if (productList[i].code === cartProducts[j]) {
        var listProductinCart = productList[i];
        var ListProductsQuantity = cartProductsQuantity[j];
        ListProductsInCart.push({
          listProductinCart,
          ListProductsQuantity,
        });
      }
    }
  }

  const DeleteToCart = (product) => {
    removeProductFromCart(product.listProductinCart.code);
  };

  return (
    <>
      {ListProductsInCart.map((product, i) => (
        <div className="product-incart" key={i}>
          <div className="product-incart__image">
            <img src={product.listProductinCart.image01} alt="" />
          </div>
          <div className="product-incart__title">
            <Link to={`/product/${product.listProductinCart.slug}`}>
              <h3 className="product-incart__title__name">
                {product.listProductinCart.title}
              </h3>
            </Link>
            <p className="product-incart__title__description">
              {product.listProductinCart.description}
            </p>
          </div>

          <div className="product-incart__price">
            <div className="product-incart__price__text">
              {numberWithCommas(product.listProductinCart.price)}
            </div>
            <p>&nbsp;đ</p>
          </div>

          <div className="product-incart__quantity">
            <div className="product-incart__quantity__btn">
              <i className="bx bx-minus-circle"></i>
            </div>
            <div className="product-incart__quantity__input">
              {product.ListProductsQuantity}
            </div>
            <div className="product-incart__quantity__btn">
              <i className="bx bxs-plus-circle"></i>
            </div>
          </div>

          <div className="product-incart__delele" onClick={() => DeleteToCart(product)}>
            <i className='bx bxs-trash-alt'></i>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductsInCart;
