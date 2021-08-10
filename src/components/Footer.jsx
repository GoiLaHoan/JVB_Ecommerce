import React from "react";

import { Link } from "react-router-dom";

import Grid from "./Grid";

import logo from "../assets/images/Logo.svg";

const footerAboutLinks = [
  {
    display: "Giới thiệu",
    path: "/about",
  },
  {
    display: "Liên hệ",
    path: "/about",
  },
  {
    display: "Tuyển dụng",
    path: "/about",
  },
  {
    display: "Tin tức",
    path: "/about",
  },
  {
    display: "Hệ thống cửa hàng",
    path: "/about",
  },
];

const footerCustomerLinks = [
  {
    display: "Chính sách đổi trả",
    path: "/about",
  },
  {
    display: "Chính sách bảo hành",
    path: "/about",
  },
  {
    display: "Chính sách hoàn tiền",
    path: "/about",
  },
];
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <Grid col={4} mdCol={2} smCol={1} gap={10}>
          <div className="footer__about">
            <p>
              <Link to="/">
                <img src={logo} className="footer__logo" alt="" />
              </Link>
            </p>
            <p>
              <b>thuocsi.vn là website thuộc sở hữu của công ty TNHH Buymed.</b>
              Công Ty TNHH Buymed Địa Chỉ: 602/27 Điện Biên Phủ, Phường 22, Quận
              Bình Thạnh, Hồ Chí Minh Số Chứng Nhận Đăng Ký Kinh Doanh:
              0314758651, Cấp Ngày 29/11/2017, Tại Sở Kế Hoạch Và Đầu Tư Thành
              Phố Hồ Chí Minh Số Giấy Phép Sàn Thương Mại Điện Tử:
              0314758651/KD-0368
            </p>
          </div>
          <div>
            <div className="footer__title">Tổng đài hỗ trợ</div>
            <div className="footer__content">
              <p>
                Liên hệ đặt hàng <strong>0123456789</strong>
              </p>
              <p>
                Thắc mắc đơn hàng <strong>0123456789</strong>
              </p>
              <p>
                Góp ý, khiếu nại <strong>0123456789</strong>
              </p>
            </div>
          </div>
          <div>
            <div className="footer__title">Về Thuocsi</div>
            <div className="footer__content">
              {footerAboutLinks.map((item, index) => (
                <p key={index}>
                  <Link to={item.path}>{item.display}</Link>
                </p>
              ))}
            </div>
          </div>
          <div>
            <div className="footer__title">Chăm sóc khách hàng</div>
            <div className="footer__content">
              {footerCustomerLinks.map((item, index) => (
                <p key={index}>
                  <Link to={item.path}>{item.display}</Link>
                </p>
              ))}
            </div>
          </div>
        </Grid>
      </div>
    </footer>
  );
};

export default Footer;
