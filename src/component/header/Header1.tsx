import React from "react";
import classNames from 'classnames/bind';
import styles from './header1.module.scss';
const cx = classNames.bind(styles);


const Header1 = () => {
  return (
    <div className={cx("header")}>
      <div className={cx("header-icon-menu")}>
        <img src={require("../../assets/Menu.png")} alt="" />
      </div>
      <div className={cx("header-icon-logo")}>
        <img src={require("../../assets/Logo.png")} alt="" />
      </div>
      <div className={cx("header-icon-search")}>
        <img src={require("../../assets/Search.png")} alt="" />
      </div>
      <div className={cx("header-icon-cart")}>
        <img src={require("../../assets/Cart.png")} alt="" />
      </div>
    </div>
  );
};

export default Header1;
