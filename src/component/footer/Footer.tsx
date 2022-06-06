import React from "react";
import Devider from "../devider/Devider";
import "./footer.scss";
const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className="footer-social-icon">
        <img
          src={require("../../assets/twiter.png")}
          className="footer-social-icon-twitter"
          alt=""
        />
        <img
          src={require("../../assets/insta.png")}
          className="footer-social-icon-insta"
          alt=""
        />
        <img
          src={require("../../assets/youtube.png")}
          className="footer-social-icon-youtube"
          alt=""
        />
      </div>
      <Devider />
      <p className="footer-text">
        support@openui.design <br />
        +60 825 876 <br />
        08:00 - 22:00 - Everyday
      </p>
      <Devider />
      <div className="footer-info">
        <p>About</p>
        <p>Contact</p>
        <p>Blog</p>
      </div>
      <div className="footer-end">
        <p>Copyright© OpenUI All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
