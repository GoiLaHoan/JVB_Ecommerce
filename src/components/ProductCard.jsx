import React, { useState } from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import Button from "./Button";

import numberWithCommas from "../utils/numberWithCommas";

import { connect } from "react-redux";
import { addCart } from "../action/addAction";

const ProductCard = (props) => {

  // const [cartNumber, setCartNumber] = useState(0);

  // const addToCart = () => {
  //   setCartNumber(cartNumber + 1);
  // }


  return (
    <div className="product-card">
      <Link to={`/product/${props.slug}`}>
        <div className="product-card__image">
          <img src={props.img01} alt="" />
        </div>
        <h3 className="product-card__name">{props.name}</h3>
        <div className="product-card__price">
          {numberWithCommas(props.price) + " đ"}

        </div>
      </Link>
      <div className="product-card__btn">
        <Button size="sm" icon="bx bx-cart" animate={true} onClick={() => props.addCart('Thêm vào giỏ hàng')}>
          CHỌN MUA
        </Button>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  img01: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  slug: PropTypes.string.isRequired,
};

export default connect(null, {addCart})(ProductCard);
