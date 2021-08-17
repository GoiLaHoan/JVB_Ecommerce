import React from "react";

import { Link } from "react-router-dom";

import Grid from "./Grid";

import logo from "../assets/images/Logo.svg";
import app from "../assets/images/footer/app.png";
import dangky from '../assets/images/footer/dangky.png';



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
        display: "Đăng ký bán hàng cùng thuocsi",
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
                <b><strong style={{color: '$txt-main-color'}}>thuocsi.vn</strong> là website thuộc sở hữu của công ty TNHH Buymed.</b>
                Công Ty TNHH Buymed Địa Chỉ: 602/27 Điện Biên Phủ, Phường 22, Quận
                Bình Thạnh, Hồ Chí Minh Số Chứng Nhận Đăng Ký Kinh Doanh:
                0314758651, Cấp Ngày 29/11/2017, Tại Sở Kế Hoạch Và Đầu Tư Thành
                Phố Hồ Chí Minh Số Giấy Phép Sàn Thương Mại Điện Tử:
                0314758651/KD-0368
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
                        <Grid col={6} mdCol={6} smCol={6} gap={5}>
                          <div className='footer__app-background1'><img className='giaohang1' src={giaohang1} alt=""></img></div>
                          <div className='footer__app-background2'><img className='giaohang2' src={giaohang2} alt=""></img></div>
                          <div className='footer__app-background3'><img className='giaohang3' src={giaohang3} alt=""></img></div>
                          <div className='footer__app-background4'><img className='giaohang4' src={giaohang4} alt=""></img></div>
                          <div className='footer__app-background5'><img className='giaohang5' src={giaohang5} alt=""></img></div>
                          <div className='footer__app-background6'><img className='giaohang6' src={giaohang6} alt=""></img></div>
                    
                        </Grid>
                        </div>
                     </Link>
                  
                  
                  
                      
                </div>
            </div>
            <div className='footer__about'>
              <h3 className='footer__title'>LIÊN HỆ</h3>
              <div className="footer__contact">
                <div className='footer__contact-icon'>Icon_Email</div>
                <div ><Link to ='/'>hotro@thuocsi.vn</Link>|</div>
                <div>Icon_facebook</div>
                
            </div>
            <div className="footer__contact">
                <div className="footer__contact-icon">Icon_Phone</div>
                <div><Link to ='/'>028 7300 8840</Link></div>
            </div>
            
            <Link to="/">
                    <img className="app" src={app} alt="App" />
                </Link>
              
            </div>
          </Grid>
        </div>
      </footer>
    );
  };
  
  export default Footer;