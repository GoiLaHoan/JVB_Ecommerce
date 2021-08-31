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
  speed: 700,
  autoplaySpeed: 1500,
  slidesToShow: 1,
  slidesToScroll: 1,
  cssEase: "linear",

};

const Slickslider = () => {
  return (
    <div style={{ backgroundColor: "#E6ECF8" }}>
      <Slider {...settings} style={{ paddingTop: '40px', marginBottom: "80px" }}>
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
  );
};

export default Slickslider;
