import React, { useRef, useEffect, useContext } from "react";
import { Link, useLocation, Route } from "react-router-dom";

import logo from "../assets/images/Logo.svg";
import SearchBox from "./SearchBox";

import { LoginContext } from "./Layout";
import { useSelector } from "react-redux";

const mainNav = [
  {
    display: "Trang chủ",
    path: "/",
  },
  {
    display: "Sản phẩm",
    path: "/products",
  },
  {
    display: "Mã Giảm Giá",
    path: "/promo-codes",
  },
  {
    display: "Liên hệ",
    path: "/contact",
  },
];

const Header = () => {
  let ProductsInCart = useSelector((state) => state.ProductsInCart);
  const { pathname } = useLocation();
  const activeNav = mainNav.findIndex((e) => e.path === pathname);
  const { status, updateStatus } = useContext(LoginContext);

  const profile = JSON.parse(localStorage.getItem("profile"));

  const headerRef = useRef(null);

  const handleLogout = () => {
    if (window.confirm('Bạn có chắc chắn muốn đăng xuất không?')) {
      updateStatus();
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("shrink");
      } else {
        headerRef.current.classList.remove("shrink");
      }
    });

    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  const menuLeft = useRef(null);

  const menuToggle = () => menuLeft.current.classList.toggle("active");

  return (
    <div className="header" ref={headerRef}>
      <div className="container">
        <div className="header__logo">
          <Link to="/">
            <img className="header__logo__img" src={logo} alt="" />
          </Link>
        </div>

        <div className="header__menu">
          <div className="header__menu__mobile-toggle" onClick={menuToggle}>
            <i className="bx bx-menu-alt-left"></i>
          </div>
          <div className="header__menu__left" ref={menuLeft}>
            <div className="header__menu__left__close" onClick={menuToggle}>
              <i className="bx bx-chevron-left"></i>
            </div>
            {mainNav.map((item, index) => (
              <div
                key={index}
                className={`header__menu__item header__menu__left__item ${
                  index === activeNav ? "active" : ""
                }`}
                onClick={menuToggle}
              >
                <Link to={item.path}>
                  <span>{item.display}</span>
                </Link>
              </div>
            ))}
          </div>
          <div className="header__menu__right">
            <div className="header__menu__item_icon_search header__menu__item header__menu__right__item">
              <Route
                render={({ history, match }) => (
                  <SearchBox history={history} match={match} />
                )}
              />
            </div>
            {status ? (
              <>
                <div className="header__menu__item header__menu__right__item">
                  <Link to="/cart">
                    <i className="bx bx-shopping-bag"></i>
                  </Link>
                  {ProductsInCart.totalCart ? (
                    <div className="header__menu__right__item__quantity">
                      {ProductsInCart.totalCart}
                    </div>
                  ) : (
                    <div className="header__menu__right__item__quantity">0</div>
                  )}
                </div>
                <div className="header__menu__item header__menu__right__item">
                  <div className="header__menu__right__profile">
                    <i className="bx bx-user header__menu__right__profile__icon__user"></i>
                    <div className="header__menu__right__profile__dropMenu">
                      <h3
                        style={{
                          paddingBottom: "10px",
                          borderBottom: "1px solid #00B46E",
                        }}
                      >
                        {profile.username}
                      </h3>
                      <ul>
                        <li className="bx bxs-user-circle icon_dropMenu">
                          <p>My Profile</p>
                        </li>
                        <li className="bx bxs-inbox icon_dropMenu">
                          <p>Inbox</p>
                        </li>
                        <li className="bx bxs-help-circle icon_dropMenu">
                          <p>Help</p>
                        </li>
                        <li
                          className="bx bx-log-out icon_dropMenu"
                          onClick={handleLogout}
                        >
                          <p>Logout</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <Link to="/login">
                  <div className="header__menu__right__login">
                    <button className="header__menu__right__login__btn">
                      <span className="header__menu__right__login__btn__label">
                        Đăng nhập
                      </span>
                    </button>
                  </div>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
