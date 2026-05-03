import React from 'react'
import './ContactUs.css'

const ContactUs = () => {
  return (
    <div className='policy-page'>
      <div className="policy-hero">
        <h1>Contact Us</h1>
        <p className="policy-date">Last updated on 03-05-2026</p>
      </div>
      <div className="policy-container">
        <div className="policy-card">
          <p className="policy-intro">
            We'd love to hear from you. Reach out to us using the details below and our team will respond within 24 hours.
          </p>
          <div className="contact-grid">
            <div className="contact-item">
              <span className="contact-label">Merchant Legal Entity Name</span>
              <span className="contact-value">Classic Fashion Point</span>
            </div>
            <div className="contact-item">
              <span className="contact-label">Registered Address</span>
              <span className="contact-value">174, 33 Feet Road, Sanjay Colony, Sector 23, Faridabad, Haryana — PIN: 121005</span>
            </div>
            <div className="contact-item">
              <span className="contact-label">Operational Address</span>
              <span className="contact-value">174, 33 Feet Road, Sanjay Colony, Sector 23, Faridabad, Haryana — PIN: 121005</span>
            </div>
            <div className="contact-item">
              <span className="contact-label">Telephone No</span>
              <span className="contact-value"><a href="tel:8295807935">+91 8295807935</a></span>
            </div>
            <div className="contact-item">
              <span className="contact-label">E-Mail ID</span>
              <span className="contact-value"><a href="mailto:allu2001arjun@gmail.com">allu2001arjun@gmail.com</a></span>
            </div>
            <div className="contact-item">
              <span className="contact-label">Business Hours</span>
              <span className="contact-value">Monday – Saturday: 10:00 AM – 7:00 PM IST</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
