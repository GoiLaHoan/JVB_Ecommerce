import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { withRouter } from "react-router";
import numberWithCommas from "../utils/numberWithCommas";
import Button from "./Button";

const ProductView = (props) => {
  const product = props.product;

  const [previewImg, setPreviewImg] = useState(product.image01);

  const [quantity, setQuantity] = useState(1);

  const updateQuantity = (type) => {
    if (type === "plus") {
      setQuantity(quantity + 1);
    } else {
      setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
    }
  };

  useEffect(() => {
    setPreviewImg(product.image01);
  }, [product]);
  const addToCart = () => {
    console.log({ quantity });
  };

  const goToCart = () => {
    props.history.push("/cart");
  };
  return (
    <div className="product">
      <div className="product__images">
        <div className="product__images__list">
          <div
            className="product__images__list__item"
            onClick={() => setPreviewImg(product.image01)}
          >
            <img src={product.image01} alt="" />
          </div>
        </div>
        <div className="product__images__main">
          <img src={previewImg} alt="" />
        </div>
        <span style={{ color: "#919AB8" }}>
          {" "}
          * Hình sản phẩm có thể thay đổi theo thời gian
        </span>
      </div>

      <div className="product__info">
        <h1 className="product__info__title">{product.title}</h1>
        <div className="product__info__description">
          <div
            className="product__info__description__content"
            dangerouslySetInnerHTML={{ __html: product.description }}
          ></div>
          <hr
            style={{
              marginTop: "3rem",
              marginBottom: "1rem",
              border: "0",
              borderTop: "1px solid rgba(195,204,220,.4)",
            }}
          />
        </div>
        <div className="product__info__item_wrap">
          <div className="product__info__item_left">
            <div
              className="product__info__item__sold"
              
            >
              <i
                className="bx bx-cart"
                style={{ color: "#818181", fontSize: "30px" }}
              ></i>
              <span
                style={{
                  marginLeft: "7px",
                  color: "#919AA3",
                  paddingTop: "8px",
                }}
              >
                37 lượt mua trong 24h giờ qua
              </span>
            </div>
            <div className="product__info__item">
              <span className="product__info__item__price">
                {numberWithCommas(product.price)} đ
              </span>
            </div>
            <div className="product__info__item">
              <div className="product__info__item__quantity">
                <div
                  className="product__info__item__quantity__btn"
                  onClick={() => updateQuantity("minus")}
                >
                  <i className="bx bx-minus-circle"></i>
                </div>
                <div className="product__info__item__quantity__input">
                  {quantity}
                </div>
                <div
                  className="product__info__item__quantity__btn"
                  onClick={() => updateQuantity("plus")}
                >
                  <i className="bx bxs-plus-circle"></i>
                </div>
              </div>
            </div>
            <div className="product__info__item product__info__item__button">
              <Button onClick={() => addToCart()}>thêm vào giỏ</Button>
              <Button onClick={() => goToCart()}>mua ngay</Button>
            </div>
          </div>
          <div className="product__info__item_right">
            <div>
              <h2 className="product__info__item_right_label">NHÀ SẢN XUẤT</h2>
              <div
                className="product__info__item_right_content"
                dangerouslySetInnerHTML={{ __html: product.producer }}
              ></div>
            </div>
            <div>
              <h2 className="product__info__item_right_label">NƯỚC SẢN XUẤT</h2>
              <div className="product__info__item_right_content"></div>
            </div>
            <div>
              <h2 className="product__info__item_right_label">NHÓM THUỐC</h2>
              <div
                className="product__info__item_right_content"
                dangerouslySetInnerHTML={{ __html: product.categorySlug }}
              ></div>
            </div>
            <div>
              <h2 className="product__info__item_right_label">ĐÁNH GIÁ</h2>
              <i className="product__info__item_right_icon bx bxs-star"></i>
              <i className="product__info__item_right_icon bx bxs-star"></i>
              <i className="product__info__item_right_icon bx bxs-star"></i>
              <i className="product__info__item_right_icon bx bxs-star"></i>
              <i className="product__info__item_right_icon bx bxs-star"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductView.propTypes = {
  product: PropTypes.object.isRequired,
};

export default withRouter(ProductView);
