import React from 'react'
import './ContactUs.css'

const ContactUs = () => {
  return (
    <div className='policy-page'>
      <div className="policy-hero">
        <h1>Contact Us</h1>
        <p className="policy-date">Last updated on 01-05-2026 17:48:55</p>
      </div>
      <div className="policy-container">
        <div className="policy-card">
          <p className="policy-intro">
            You may contact us using the information below:
          </p>
          <div className="contact-grid">
            <div className="contact-item">
              <span className="contact-label">Merchant Legal Entity Name</span>
              <span className="contact-value">RAVI</span>
            </div>
            <div className="contact-item">
              <span className="contact-label">Registered Address</span>
              <span className="contact-value">1047, GALI-53, Sanjay Colony, Faridabad Sector 22, Haryana, PIN: 121005</span>
            </div>
            <div className="contact-item">
              <span className="contact-label">Operational Address</span>
              <span className="contact-value">1047, GALI-53, Sanjay Colony, Faridabad Sector 22, Haryana, PIN: 121005</span>
            </div>
            <div className="contact-item">
              <span className="contact-label">Telephone No</span>
              <span className="contact-value"><a href="tel:8295807935">8295807935</a></span>
            </div>
            <div className="contact-item">
              <span className="contact-label">E-Mail ID</span>
              <span className="contact-value"><a href="mailto:allu2001arjun@gmail.com">allu2001arjun@gmail.com</a></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
