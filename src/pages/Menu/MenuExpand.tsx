import React from 'react'
import classNames from 'classnames/bind';
import styles from './MenuExpand.module.scss';
const cx = classNames.bind(styles);

const MenuExpand = () => {
    return (
        <div className={cx('container')}>
            <div className={cx("close")} >
                <img src={require('../../assets/menu/Close.png')} alt="" />
            </div>
            <div className={cx("menu")} >
                <p>Women</p>
                <p>Man</p>
                <p>Kids</p>
            </div>
            <hr className={cx('hr')} />
            <div className={cx("menu-item")} >
                <p>New</p>
                <img src={require('../../assets/menu/Forward.png')} alt="" />
            </div>

            <div className={cx("menu-item")} >
                <p>Apparel</p>
                <img src={require('../../assets/menu/Vector.png')} alt="" />
                <div className={cx("menu-item-apparel-item")}>
                    <ul>
                        <li>outer</li>
                        <li>dress</li>
                        <li>blouse/shirt</li>
                        <li>t-shirt</li>
                        <li>knitwear</li>
                        <li>skirt</li>
                        <li>pants</li>
                        <li>denim</li>
                        <li>kids</li>
                    </ul>
                </div>

            </div>

        </div>
    )
}

export default MenuExpand