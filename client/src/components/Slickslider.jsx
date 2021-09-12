import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

import img1 from "./../assets/images/slickSlider/1.png";
import img2 from "./../assets/images/slickSlider/2.png";
import img3 from "./../assets/images/slickSlider/3.png";

const settings = {
  dots: true,
  infinite: true,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
  cssEase: "linear",
};

const Slickslider = () => {
  return (
    <div style={{ backgroundColor: "#E6ECF8" }}>
      <div className="slickSlider">
        <Slider {...settings}>
          <Link to="/">
            <img className="slick_img" src={img1} alt="" />
          </Link>
          <Link to="/">
            <img className="slick_img" src={img2} alt="" />
          </Link>
          <Link to="/">
            <img className="slick_img" src={img3} alt="" />
          </Link>
        </Slider>
      </div>
    </div>
  );
};

export default Slickslider;
