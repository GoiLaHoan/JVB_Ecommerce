import React from 'react'
import { Link } from "react-router-dom";
import Helmet from '../components/Helmet'

 const PromoCodes = () => {
    return (
        // <Helmet title="PromoCodes">
        //     PromoCodes
        // </Helmet>
        <Helmet title="PromoCodes">
            <promocodes>
            <div className="promocodes__content">
                
                    <h1 className="promocodes__title">MÃ GIẢM GIÁ</h1>
                    <p>Hướng dẫn sử dụng</p>
                    <ol>
                        <li><b>Đặt hàng</b> : Vào trang <Link className='promocodes__special' to="/">Đặt hàng nhanh</Link> hoặc <Link className='promocodes__special' to="/products">Sản phẩm</Link> để đặt hàng</li>
                        <li><b>Vào giỏ hàng</b> : Vào trang <Link className='promocodes__special' to="/">Giỏ hàng</Link>. Nhấn vào chữ "Dùng mã khuyến mãi"</li>
                        <li><b>Dùng mã</b> : Nhập mã muốn dùng vào ô tìm kiếm, hoặc, chọn trong danh sách mã. Rồi nhấn vào nút "Dùng ngay"</li>
                    </ol>
                
                <div className="promocodes__content-detail2">
                    <h1 className="promocodes__title">Dành riêng cho bạn</h1>
                    <p>Tham gia chương trình  <Link  className='promocodes__special' to="/">Giới thiệu bạn bè</Link>, <Link  className='promocodes__special' to="/">Đổi điểm tích luỹ</Link> để nhận được code riêng</p>
                </div>
                
            </div>
            <div className="promocodes__special-code">
                <h1>Mã giảm giá đặc biệt</h1>
                <p>Chưa có mã</p>
            </div>
            <div className="promocodes__last-content">
                <h1>Các mã khác</h1>
                <p>Chưa có mã</p>
            </div>
        </promocodes>
        </Helmet>
        
    )
}

export default PromoCodes;