import React, { useContext } from "react";
import PropTypes from "prop-types";

import { Link, useHistory } from "react-router-dom";
import { CartContext } from "./Layout";

import Button from "./Button";

import numberWithCommas from "../utils/numberWithCommas";

const ProductCard = (props) => {
  // const history = useHistory();
  const { code } = props
  const { addProductToCart } = useContext(CartContext)
  const goToCart = () => {
    addProductToCart(code, 1)
    // history.push("/cart");
  };

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
        <Button size="sm" icon="bx bx-cart" animate={true} onClick={() => goToCart()} >
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
  code: PropTypes.string.isRequired,
};

export default ProductCard;
