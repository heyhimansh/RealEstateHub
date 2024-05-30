import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          {/* <img src="./1.png" alt="" width={180} height={110} /> */}
          {/* logo */}
          <Link to="/">
            <a className="logo">HOMIEE</a>
            {/* <img src="./HOMIEE.png" alt="logo" width="100%" height="100%" /> */}
          </Link>

          <span className="secondaryText">
            Our vision is to make all people <br />
            the best place to live for them.
          </span>
        </div>

        <div className="flexColStart f-right">
          <span className="primaryText">Information</span>
          <span className="secondaryText">145 New York, FL 5467, USA</span>
          <div className="flexCenter f-menu">
            <span>Property</span>
            <span>Services</span>
            <span>Product</span>
            <span>About Us</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
