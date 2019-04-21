import React from 'react';
import './../styles/contact.scss';
import phoneIcon from "../images/phone_black.png";

const Footer = () => {
  return (
    <div className="contact">
    <div className="content-grid">
      <h3><span>06</span>CONTACT ME</h3>
      <div className="info">
          <p className="info__phone"><img src={phoneIcon} alt="lgo" style={{ width: "38px" }} /> 0933 532 059</p>
          <p className="info__email">ptntam@gmail.com</p>
      </div>
    </div>
  </div>

  );
};

export default Footer;