import React from 'react'
import styles from './Cart.module.scss'
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
const Cart = () => {
    return (
        <div className={cx('container')}>
            <div className={cx("close")}>
                <img src={require('../../assets/menu/Close.png')} alt="" />
            </div>
            <h2 className={cx('cart-text')}>Cart</h2>
            <div className={cx("cart")}>
                <div className={cx("cart-item")}>
                    <img src={require('../../assets/cart/Rectangle 344.png')} alt="" className={cx("cart-item-image")} />
                    <div className={cx("cart-item-info")}>
                        <div className={cx("cart-item-info-name")} >
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
                <div className={cx("cart-item")}>
                    <img src={require('../../assets/cart/Rectangle 344 (1).png')} alt="" className={cx("cart-item-image")} />
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
            </div>
            <div className={cx('hr')}></div>

            <div className={cx("subtotal")}>
                <div className={cx('subtotal-text')}> SubTotal</div>
                <div className={cx("subtotal-total")}>$240</div>
            </div>
            <p className={cx('shipping')}> *shipping charges, taxes and discount codes are calculated at the time of accounting. </p>
            <div className={cx("button")}>
                <img src={require('../../assets/cart/shopping bag.png')} alt="" className={cx('button-img-bag')} />
                <p className={cx('button-continue')}>BUY NOW</p>
            </div>
        </div>
    )
}


export default Cart