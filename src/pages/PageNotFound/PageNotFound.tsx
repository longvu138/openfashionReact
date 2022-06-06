import React from 'react'
import Footer from '../../component/footer/Footer'
import Header from '../../component/header/Header'
import styles from './PageNotFound.module.scss'
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
const PageNotFound = () => {
    return (
        <div className={cx('container')}>
            <Header />
            <h1 className={cx('title')}>Page Not Found</h1>
            <img src={require('../../assets/ourstory/Tailors Dummy.png')} className={cx("image")} alt="" />
            <p className={cx('text')}>We can't find the page you looking for, it will return to the</p>
            < div className={cx("button")}>
                <img src={require('../../assets/ourstory/ForwardLeftArrow.png')} alt="" className={cx('button-img-bag')} />
                <p className={cx('button-continue')}>Home Page</p>
            </div>
            <Footer />
        </div>
    )
}

export default PageNotFound