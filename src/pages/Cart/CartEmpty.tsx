import React from 'react'
import styles from './CartEmpty.module.scss'
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
const CartEmpty = () => {
    return (
        <div className={cx('container')}>
            <div className={cx("close")}>
                <img src={require('../../assets/menu/Close.png')} alt="" />
            </div>
            <h2 className={cx('cart-text')}>Cart</h2>
            <div className={cx("cart-content")}>
                You have no items in your Shopping Bag.
            </div>
            <div className={cx("button")}>
                <img src={require('../../assets/cart/shopping bag.png')} alt="" className={cx('button-img-bag')} />
                <p className={cx('button-continue')}>Continue Shopping</p>
            </div>
        </div>
    )
}

export default CartEmpty