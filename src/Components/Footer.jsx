import React from "react";
import "../css/Footer.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { saveEmail } from "../JsFiles/saveEmail";


const Footer = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const toggleChange = () => {
    navigate("/AboutUs");
  };

  const toggleClick = () => {
    navigate("/ContactUs");
  };
const changeState = () => {
  navigate('/Refund')
};
const toggleState = () => {
  navigate('/Terms')
}
const toggle = () => {
  navigate('/Privacy')
}



  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = async () => {
    await saveEmail(email);
  };


  return (
    <div className="footer">
      <div className="top">
        <div className="contact">
          <h3>Contact Us</h3>
          <p id="p">📧 Support@beau_tified*sales.com</p>
          <p id="p">📞 07013667367</p>
          <p id="p">🌏 46, Community Road. Akoka. Lagos</p>
          <p id="p">⌚ Working Hours</p>
          <p id="p">⌚ Monday - Saturday</p>
          <p id="p">⌚ 8am - 7pm</p>
        </div>

        <div className="newsletter">
          <h3>Newsletter</h3>
          <input
            className="foot-news"
            type="text"
            placeholder={"Email Address"}
            onChange={handleEmailChange}
          />
          <button className="foot-button" onClick={handleSubmit}>
            Subscribe
          </button>
        </div>

        <div className="links">
          <h3>Quick Links</h3>
          <p id="p" onClick={toggleChange}>
            About Us
          </p>
          <p id="p" onClick={toggleClick}>
            Contact Us
          </p>
          <p id="p">Shipping Information</p>
          <p id="p">My Account</p>
          <p id="p">Tracking Order</p>
        </div>

        <div className="legal">
          <h3>Legal</h3>
          <p id="p" onClick={toggleState}>Terms and Conditions</p>
          <p id="p" onClick={toggle}>Privacy</p>
          <p id="p" onClick={changeState}>Refund Policy</p>
        </div>
      </div>

      <div className="bottom">
        <div className="social">
          <h3>Social Network</h3>
          <img
            className="social-img"
            src="src\Images\facebook logo\8379988.jpg"
            alt="Facebook"
          />
          <img
            className="social-img"
            src="src\Images\twitter logo.jpg"
            alt="Twitter"
          />
          <img
            className="social-img"
            src="src\Images\Instagram_logo.jpg"
            alt="Instagram"
          />
        </div>

        <div>
          {" "}
          &copy; 2024 Beau_tified Enterprises. All Rights Reserved||Designed By
          Herdey
        </div>
      </div>
    </div>
  );
};

export default Footer;
