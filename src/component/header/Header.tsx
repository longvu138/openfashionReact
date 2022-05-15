import React from "react";
import "./header.scss";


const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="header-icon-menu">
        <img src={require("../../assets/Menu.png")} alt="" />
      </div>
      <div className="header-icon-logo">
        <img src={require("../../assets/Logo.png")} alt="" />
      </div>
      <div className="header-icon-search">
        <img src={require("../../assets/Search.png")} alt="" />
      </div>
      <div className="header-icon-cart">
        <img src={require("../../assets/Cart.png")} alt="" />
      </div>
    </div>
  );
};

export default Header;
