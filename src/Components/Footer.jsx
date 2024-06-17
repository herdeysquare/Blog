import React from 'react'
import "../css/Footer.css"
import { useState } from 'react'
import {useNavigate } from 'react-router-dom'
import { saveEmail } from '../JsFiles/saveEmail'



const Footer = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('');


    const toggleChange=() => {
        navigate('/AboutUs')}

const toggleClick = () => {
    navigate('/ContactUs')
}
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
       
    };
    const handleSubmit =async () => {
        await saveEmail (email);
       
    };


    return (
        <div className='footer'>
            <div className="top">
                <div className='contact'>
                    <h3>Contact Us</h3>
                    <p>📧 Email</p>
                    <p>📞 Telephone</p>
                    <p>🌏 Location</p>
                    <p>⌚ Working Hours</p>
                </div>

                <div className="newsletter">
                    <h3>Newsletter</h3>
                    <input className="foot-news" type="text" placeholder={"Email Address"} onChange={handleEmailChange} />
                    <button className='foot-button' onClick={handleSubmit}>Subscribe</button>
                </div>

                <div className="links">
                    <h3>Quick Links</h3>
                    <p onClick={toggleChange}>About Us</p>
                    <p onClick={toggleClick}>Contact Us</p>
                    <p>Shipping Information</p>
                    <p>My Account</p>
                    <p>Tracking Order</p>
                </div>

                <div className="legal">
                    <h3>Legal</h3>
                    <p>Terms and Conditions</p>
                    <p>Privacy</p>
                    <p>Refund Policy</p>
                </div>
            </div>



            <div className="bottom">

                <div className="social">
                    <h3>Social Network</h3>
                    <img className="social-img" src="src\Images\facebook logo\8379988.jpg" alt="Facebook" />
                    <img className="social-img" src="src\Images\twitter logo.jpg" alt="Twitter" />
                    <img className="social-img" src="src\Images\Instagram_logo.jpg" alt="Instagram" />
                </div>

                <div> &copy; 2024 Beau_tified Enterprises. All Rights Reserved||Designed By Herdey
                </div>
            </div>
        </div>
    )
}

export default Footer