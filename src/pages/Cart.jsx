import React from 'react'
import { Link } from "react-router-dom";
import Helmet from '../components/Helmet'

import image01 from '../assets/images/products/product-01 (1).jpg'
const Cart = () => {
    return (
        <Helmet title="Cart">
            <div className="cart__container">
                
                <div className="cart__container-product">
                    <h1 className='cart__container-title'>Giỏ hàng</h1>
                    <div className="cart__container-product-detail">
                        <div className='cart__product-images'>
                            <img className='cart__product-images-detail' src={image01} alt="Ảnh thuốc" />
                        </div>
                        <div className="cart__product-information">
                            <Link to='/'>
                                <h3 className="cart__product-title">Silkeron Phil Inter Pharma (Lốc/15tube/10gr)</h3>
                            
                            </Link>
                            <p className="cart__product-description">Lốc 15 tube x 10 gram</p>
                        </div>
                        <div className='cart__product-CRUD'>
                            <div className='cart__product-price'>177.000 đ</div>
                            
                            <div className='cart__product-decrease'>
                                <i class="cart__product-decrease-icon fas fa-minus-circle"></i>
                            </div>
                            <div className='cart__product-fill'>
                                <input className='cart__product-input' type="text" />
                            </div>
                            <div className='cart__product-increase'>
                                <i class="cart__product-increase-icon fas fa-plus-circle"></i>
                            </div>
                            <div className='cart__product-delete' title='Xóa sản phẩm'>
                                <i class="cart__product-delete-icon fas fa-trash"></i>
                            </div>
                        </div>
                    </div>
                    <div className='cart__container-note'>
                         <i class="cart__container-note-icon fas fa-exclamation-circle"></i>
                        <p>Để thêm sản phẩm vào giỏ hàng, vui lòng quay về trang <Link to='/products'><span style={{ color: '$main-color'}}>Sản phẩm</span> </Link></p>
                    </div>
                    <div className='cart__container-customer-note'>
                        <h3 className='cart__container-customer-note-detail'>Ghi chú khác</h3>
                        <p className='cart__container-customer-note-detail'>Trường hợp khách hàng không tìm được sản phẩm mong muốn, quý khách xin vui lòng để lại thông tin bên dưới. Chúng tôi sẽ liên hệ mua thuốc và báo giá sớm nhất có thể</p>
                        <input className='cart__container-customer-input' type="text" title='Ghi chú của khách hàng' placeholder='Ghi chú của khách hàng'/>
                    </div>
                </div>
                <div className='cart__container-pay'>
                    <div className="cart__container-totalPrice">
                        <div className="cart__total-quantity">
                            <p className='cart__product-title'>Số lượng</p>
                            <p className="cart__product-quantity">2</p>
                        </div>
                        <div className='cart__total-price'>
                            <p className='cart__product-title'>Tổng tiền</p>
                            <p className='cart__product-price'>177.000 đ</p>
                        </div>
                    </div>
                    <div className='cart__product-promocodes'>
                        <i className='cart__product-promocodes-icon bx bxs-purchase-tag'></i>
                        <p className='cart__product-promocodes-detail'>Dùng mã khuyến mãi</p>
                    </div>
                     <button className='cart__pay-button'>Thanh toán</button>
                    <div className='cart__product-return'>
                        <Link to='/products'> Tiếp tục đặt hàng</Link>
                    </div>
                    
                </div>
                
            </div>
        </Helmet>
    )
}

export default Cart;