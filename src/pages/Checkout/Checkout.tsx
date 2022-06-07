import React from 'react'
import Devider from '../../component/devider/Devider'
import styles from './Checkout.module.scss'
import classNames from 'classnames/bind';
import Header1 from '../../component/header/Header1';
const cx = classNames.bind(styles);
const Checkout = () => {
    return (
        <div className={cx('container')}>
            <Header1 />
            <h3 className={cx('checkout')}>Checkout</h3>
            <Devider />
            <div className={cx("cart-item")}>
                <img src={require('../../assets/cart/Rectangle 344.png')} alt="" className={cx("cart-item-image")} />
                <div className={cx("cart-item-info")}>
                    <div className={cx("cart-item-info-name")}>
                        lamerei
                    </div>
                    <div className={cx("cart-item-info-title")}>
                        Recycle Boucle Knit Cardigan Pink
                    </div>
                    <div className={cx("cart-item-info-quantity")}>
                        <img src={require('../../assets/cart/minus.png')} alt='' className={cx("cart-item-info-quantity-minus")} />
                        <p className={cx("cart-item-info-quantity-number")}> 1 </p>
                        <img src={require('../../assets/cart/plus.png')} alt='' className={cx("cart-item-info-quantity-plus")} />
                    </div>
                    <div className={cx("cart-item-info-price")}>
                        120$
                    </div>
                </div>
            </div>
            <div className={cx('hr')}></div>

            <div className={cx("voucher")}>
                <img src={require('../../assets/checkout/Voucher.png')} className={cx("voucher-image")} alt="" />
                <span className={cx('voucher-text')}> Add promo code</span>
            </div>

            <div className={cx('hr')}></div>

            <div className={cx("delivery")}>
                <img src={require('../../assets/checkout/Door to Door Delivery.png')} className={cx("delivery-image")} alt="" />
                <span className={cx('delivery-text')}>Delivery</span>
                <span className={cx('delivery-free')}>Free</span>
            </div>
            <div className={cx('hr')}></div>
            <div className={cx("space")}>            </div>
            <div className={cx("total")}>
                <p className={cx('total-text')}> EST. TOTAL </p>
                <p className={cx('total-price')}>$240</p>
            </div>
            <div className={cx("button")}>
                <img src={require('../../assets/cart/shopping bag.png')} alt="" className={cx('button-img-bag')} />
                <p className={cx('button-continue')}>Check out</p>
            </div>
        </div>
    )
}

export default Checkout