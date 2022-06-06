import React from 'react'
import Devider from '../../component/Devider/Devider'
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
const cx = classNames.bind(styles);
const Menu = () => {
    return (
        <div className={cx('container')}>
            <div className={cx("close")}>
                <img src={require('../../assets/menu/Close.png')} alt="" />
            </div>
            <div className={cx("menu")}>
                <p>Women</p>
                <p>Man</p>
                <p>Kids</p>
            </div>
            <hr className={cx('hr')} />
            <div className={cx("menu-item")} >
                <p>New</p>
                <img src={require('../../assets/menu/Forward.png')} alt="" />
            </div>

            <div className={cx("menu-item")}>
                <p>Apparel</p>
                <img src={require('../../assets/menu/Forward.png')} alt="" />
            </div>

            <div className={cx("menu-item")}>
                <p>Bag</p>
                <img src={require('../../assets/menu/Forward.png')} alt="" />
            </div>

            <div className={cx("menu-item")}>
                <p>Shoes</p>
                <img src={require('../../assets/menu/Forward.png')} alt="" />
            </div>

            <div className={cx("menu-item")}>
                <p>Beauty</p>
                <img src={require('../../assets/menu/Forward.png')} alt="" />
            </div>

            <div className={cx("menu-item")}>
                <p>Accessories</p>
                <img src={require('../../assets/menu/Forward.png')} alt="" />
            </div>

            <div className={cx("phone")}>
                <img src={require('../../assets/menu/Call.png')} className={cx("phone-image")} alt="" />
                <p className={cx('phone-number')}> (786) 713-8616 </p>
            </div>

            <div className={cx("location")}>
                <img src={require('../../assets/menu/Location.png')} className={cx("location-image")} alt="" />
                <p className={cx('location-text')}> Store locator </p>
            </div>

            <Devider />
            <div className={cx("social")}>
                <img src={require('../../assets/menu/Twitter.png')} alt="" />
                <img src={require('../../assets/menu/Instagram.png')} className={cx("social-insta")} alt="" />
                <img src={require('../../assets/menu/YouTube.png')} alt="" />

            </div>
        </div>
    )
}

export default Menu
