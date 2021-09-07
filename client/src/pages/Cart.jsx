import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../redux/actions";

import Helmet from "../components/Helmet";
import numberWithCommas from "../utils/numberWithCommas";
import ProductsInCart from "../components/ProductsInCart";
import { Link } from "react-router-dom";

const Cart = () => {
  let Products = useSelector((state) => state.ProductsInCart);
  let TotalMoney = 0;
  Products.products.map(
    (product) => (TotalMoney += product.price * product.quantity)
  );
  const dispatch = useDispatch();

  const handlePayment = () => {
    if (window.confirm("Bạn có chắc chắn muốn thanh toán không?")) {
      Products = {
        products: [],
        totalCart: 0,
      };
      dispatch(actions.checkout());
    }
  };
  return (
    <Helmet title="Cart">
      <div className="container">
        <div className="main main__cart">
          {TotalMoney === 0 ? (
            <div className="cart__empty">
              <p className="cart__empty__title">Giỏ hàng của bạn trống</p>
              <div className="cart__empty__btnback">
                <Link to="/products">
                  <div className="cart__empty__btnback__text">
                    Về trang đặt hàng
                  </div>
                </Link>
              </div>
            </div>
          ) : (
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
                <div className="cart__products" style={{ marginRight: "30px" }}>
                  <ProductsInCart />

                  <div className="cart__note" style={{ marginTop: "30px" }}>
                    <div className="cart__note__title">Ghi chú khác</div>
                    <div className="cart__note__content">
                      Trường hợp không tìm được thuốc mong muốn, Quý khách vui
                      lòng điền yêu cầu bên dưới. Chúng tôi sẽ liên hệ mua thuốc
                      và báo giá sớm nhất có thể.
                    </div>
                    <textarea
                      rows="1"
                      name="note"
                      className="cart__note__textarea"
                      aria-label="Ghi chú của khách hàng"
                      placeholder="Ghi chú của khách hàng"
                    ></textarea>
                  </div>
                </div>
                <div className="cart__checkout_wrap">
                  <div className="cart__checkout">
                    <div className="cart__checkout__quantity">
                      Bạn đang có&nbsp;
                      <p style={{ color: "#f9b514", fontWeight: "bolder" }}>
                        {Products.totalCart}
                      </p>
                      &nbsp;sản phẩm trong giỏ hàng
                    </div>
                    <div className="cart__checkout__totalmoney">
                      <p>Thành tiền</p>

                      <div style={{ color: "#00B46E", fontWeight: "bolder" }}>
                        {numberWithCommas(TotalMoney)} đ
                      </div>
                    </div>
                    <button
                      className="cart__checkout__pay"
                      onClick={() => handlePayment()}
                    >
                      <div className="cart__checkout__pay__text">
                        Thanh toán
                      </div>
                    </button>
                  </div>

                  <div className="cart__checkout__back">
                    <Link to="/products" className="cart__checkout__back__link">
                      &lt; Tiếp tục đặt hàng
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Helmet>
  );
};

export default Cart;
