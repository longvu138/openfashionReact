import React from 'react'
import Devider from '../../component/Devider/Devider'
import Header from '../../component/header/Header'
import styles from './OurStory.module.scss'
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
const OurStory = () => {
    return (
        <div className={cx('container')}>
            <Header />
            <h1 className={cx('ourstory')}>Our Story</h1>
            <Devider />
            <p className={cx('ourstory-text')}>
                Open Fashion - Free Ecommerce UI Kit is a free download UI kit. You can open Open Fashion - Free Ecommerce UI Kit file by Figma.
            </p>
            <p className={cx('ourstory-text')}>
                Create stunning shop with bulletproof guidelines and thoughtful components. Its library contains more than 50+ components supporting Light & Dark Mode and 60+ ready to use mobile screens.
            </p>
            <div className={cx("ourstory-image")}>
                <img src={require('../../assets/ourstory/image 3.png')} alt="" />
            </div>

            <div className={cx("sign-up")}>Sign Up</div>
            <Devider />
            <div className={cx("sign-up-text")}>
                Receive early access to new arrivals, sales, exclusive content, events and much more!
            </div>
            <div className={cx("email")}>Email address</div>
            <div className={cx('hr')}></div>
            <div className={cx("button")}>
                <p className={cx('button-continue')}>SUBMIT</p>
                <img src={require('../../assets/ourstory/Forward Arrow.png')} alt="" className={cx('button-img-bag')} />
            </div>
        </div>
    )
}

export default OurStory