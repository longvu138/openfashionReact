import React from 'react'
import Devider from '../../component/devider/Devider'
import Header from '../../component/header/Header'
import styles from './Payment.module.scss'
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
const Payment = () => {
    return (
        <div className={cx('container')}>
            <Header />
            <div className={cx("total")}>
                <p className={cx('total-text')}>TOTAL</p>
                <p className={cx('total-price')}>$240</p>
            </div>
            <div className={cx("button")}>
                <img src={require('../../assets/cart/shopping bag.png')} alt="" className={cx('button-img-bag')} />
                <a href='#popup1' className={cx('button-continue')}>Check OUT</a>
            </div>


            <div id="popup1" className={cx("overlay")}>
                <div className={cx("popup")}>
                    <div className={cx("popup-header")}>
                        <a className={cx("popup-header-close")} href="#">&times;</a>
                    </div>
                    <div className={cx("popup-content")}>
                        <h2 className={cx('popup-content-text')}>Payment Success</h2>
                        <img src={require('../../assets/checkout/Vector.png')} className={cx("popup-content-vector")} alt="" />
                        <p className={cx('popup-content-n')}> Your payment was success</p>
                        <p className={cx('popup-content-id')}>Payment ID</p>
                        <Devider />
                        <p className={cx('popup-content-rate')}>Rate your purchase</p>
                        <div className={cx("icon")}>
                            <img src={require('../../assets/checkout/Disappointed.png')} alt="" />
                            <img src={require('../../assets/checkout/Happy.png')} alt="" />
                            <img src={require('../../assets/checkout/In Love.png')} alt="" />
                        </div>
                        <div className={cx("popup-content-btn")}>
                            <button className={cx('popup-content-btn-submit')}>Submit</button>
                            <button className={cx('popup-content-btn-back')}>Back To Home</button>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Payment