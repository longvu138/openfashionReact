import React from 'react'
import Devider from '../../component/Devider/Devider'
import Header from '../../component/header/Header'
import './Checkout.scss'
const Checkout = () => {
    return (
        <div className='container'>
            <Header />
            <h3 className='checkout'>Checkout</h3>
            <Devider />
            <div className="cart-item">
                <img src={require('../../assets/cart/Rectangle 344.png')} alt="" className="cart-item-image" />
                <div className="cart-item-info">
                    <div className="cart-item-info-name">
                        lamerei
                    </div>
                    <div className="cart-item-info-title">
                        Recycle Boucle Knit Cardigan Pink
                    </div>
                    <div className="cart-item-info-quantity">
                        <img src={require('../../assets/cart/minus.png')} alt='' className="cart-item-info-quantity-minus" />
                        <p className="cart-item-info-quantity-number"> 1 </p>
                        <img src={require('../../assets/cart/plus.png')} alt='' className="cart-item-info-quantity-plus" />
                    </div>
                    <div className="cart-item-info-price">
                        120$
                    </div>
                </div>
            </div>
            <div className='hr'></div>

            <div className="voucher">
                <img src={require('../../assets/checkout/Voucher.png')} className="voucher-image" alt="" />
                <span className='voucher-text'> Add promo code</span>
            </div>

            <div className='hr'></div>

            <div className="delivery">
                <img src={require('../../assets/checkout/Door to Door Delivery.png')} className="delivery-image" alt="" />
                <span className='delivery-text'>Delivery</span>
                <span className='delivery-free'>Free</span>
            </div>
            <div className='hr'></div>
            <div className="space">            </div>
            <div className="total">
                <p className='total-text'> EST. TOTAL </p>
                <p className='total-price'>$240</p>
            </div>
            <div className="button">
                <img src={require('../../assets/cart/shopping bag.png')} alt="" className='button-img-bag' />
                <p className='button-continue'>Check out</p>
            </div>
        </div>
    )
}

export default Checkout