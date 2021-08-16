import React from "react";

import { Link } from "react-router-dom";

import Grid from "./Grid";

import logo from "../assets/images/Logo.svg";
import app from "../assets/images/footer/app.png";
import IOS from "../assets/images/footer/IOS.png";
import android from '../assets/images/footer/android.png';
import dangky from '../assets/images/footer/dangky.png';

import 'font-awesome/css/font-awesome.min.css';

import giaohang1 from '../assets/images/footer/giaohang1.png';
import giaohang2 from '../assets/images/footer/giaohang2.png';
import giaohang3 from '../assets/images/footer/giaohang3.png';
import giaohang4 from '../assets/images/footer/giaohang4.png';
import giaohang5 from '../assets/images/footer/giaohang5.png';
import giaohang6 from '../assets/images/footer/giaohang6.png';


const footerAboutInformation = [
    {  
      // 1
        display: "Giới thiệu về thuocsi.vn",
        path: "/about"
    },
    {  
      // 7
        display: "Điều khoản sử dụng",
        path: "/about"
    },
    {  
      // 2
        display: "Hướng dẫn đặt hàng",
        path: "/about"
    },
    {  
      // 8
        display: "Cơ chế giải quyết tranh chấp",
        path: "/about"
    },
    {  
      // 3
        display: "Chính sách bảo mật",
        path: "/about"
    },
    {  
      // 9
        display: "Thoả thuận về dịch vụ TMDT",
        path: "/about"
    },
    {  
      // 4
        display: "Câu hỏi thường gặp(Q&A)",
        path: "/about"
    },
    {  
      // 10
        display: "Quy chế hoạt động",
        path: "/about"
    },
    {  
      // 5
        display: "Chính sách quy định chung",
        path: "/about"
    },
    {  
      // 11
        display: "Bán hàng cùng thuocsi",
        path: "/about"
    },
    
    
    
    
    
    {  
      // 6
        display: "Tuyển dụng | Recruiment",
        path: "/about"
    },
    
    
    
    
]



const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer__container">
          <Grid col={2} mdCol={2} smCol={1} gap={50}>
            <div className="footer__about">
              <p>
                <Link to="/">
                  <img src={logo} className="footer__logo" alt="" />
                </Link>
              </p>
              <p>
                <b><strong style={{color: '$txt-main-color'}}>thuocsi.vn</strong> <b></b>là website thuộc sở hữu của công ty TNHH Buymed.</b>
                <h3>Công Ty TNHH Buymed</h3> 
                <p>Địa Chỉ: <b>602/27 Điện Biên Phủ, Phường 22, Quận Bình Thạnh, Hồ Chí Minh</b><br/>
                Số Chứng Nhận Đăng Ký Kinh Doanh:
                0314758651, <b>Cấp Ngày 29/11/2017,</b> <br />
                Tại Sở Kế Hoạch Và Đầu Tư Thành
                Phố Hồ Chí Minh <br/>Số Giấy Phép Sàn Thương Mại Điện Tử:
                0314758651/KD-0368
                </p> 
                
              </p>
              <div>
              <Link to="/">
                  <img src={dangky} className="footer__dangky" alt="" />
                </Link>
              </div>
              <div className="footer__information">
                <h3 className="footer__title">THÔNG TIN CHUNG</h3>
                <Grid col={2} mdCol={2} smCol={2} gap={25}>
                    
                    {footerAboutInformation.map((item, index) => (
                        <div key={index}>
                          <Link to={item.path}>{item.display}</Link>
                        </div>
                      ))}
                </Grid>
                
              </div>

              <div className="footer__app">
                  <h3 className='footer__title'>DỊCH VỤ GIAO HÀNG</h3>
                    <Link to="/">
                      <div className='footer__app-list'>
                        
                          <div className='footer__app-background1'><img className='footer__giaohang1' src={giaohang1} alt=""></img></div>
                          <div className='footer__app-background1'><img className='footer__giaohang2' src={giaohang2} alt=""></img></div>
                          <div className='footer__app-background3'><img className='footer__giaohang3' src={giaohang3} alt=""></img></div>
                          <div className='footer__app-background2'><img className='footer__giaohang4' src={giaohang4} alt=""></img></div>
                          <div className='footer__app-background2'><img className='footer__giaohang5' src={giaohang5} alt=""></img></div>
                          <div className='footer__app-background3'><img className='footer__giaohang6' src={giaohang6} alt=""></img></div>
                    
                        
                        </div>
                     </Link>
                  
                  
                  
                      
                </div>
            </div>
            
            <div className='footer__about'>
              <h3 className='footer__title'>LIÊN HỆ</h3>
              <div className="footer__contact">
                <div className='footer__contact-icon'>
                  <i class="icon-item far fa-envelope"></i>
                </div>
                <Link to ='/'>
                  <div className='footer__text-item'>hotro@thuocsi.vn|</div>
                  </Link>
                <div className='footer__contact-facebook'>
                  <i class="icon-item fab fa-facebook"></i>
                </div>
                
            </div>
            <div className="footer__contact">
                <div className="footer__contact-icon">
                <i class="icon-item fas fa-phone"></i>
                </div>
                <Link to ='/'>
                  <div className='footer__text-item'>028 7300 8840</div>
                  </Link>
            </div>
            
            <Link to="/">
                    <img className="app" src={app} alt="App" />
                </Link>

              <div className='footer__app-store'>
                <Link to="/">
                    <div className='footer__app-store-item'><img className="IOS" src={IOS} alt="IOS" /></div>
                    <div className='footer__app-store-item'><img className="android" src={android} alt="android" /></div>
                </Link>
              </div>
            </div>
          </Grid>
        </div>
      </footer>
    );
  };
  
  export default Footer;