import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <h2 className="footer-brand">Classic Fashion Point</h2>
          <p>Your one-stop destination for premium fashion — bringing you the latest trends in clothing, footwear, and accessories for men, women, and kids across India.</p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="Facebook" />
            <img src={assets.twitter_icon} alt="Twitter" />
            <img src={assets.linkedin_icon} alt="LinkedIn" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>QUICK LINKS</h2>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/shipping-policy">Shipping Policy</Link></li>
            <li><Link to="/terms">Terms &amp; Conditions</Link></li>
            <li><Link to="/cancellation-refund">Return &amp; Refund Policy</Link></li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91 8295807935</li>
            <li>allu2001arjun@gmail.com</li>
            <li>174, 33 Feet Road, Sanjay Colony,</li>
            <li>Sector 23, Faridabad, Haryana</li>
            <li>PIN: 121005</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2026 © ClassicFashionPoint.com — All Rights Reserved.</p>
    </div>
  )
}

export default Footer
