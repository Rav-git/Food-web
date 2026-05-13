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

        {/* Business Identity Card — legal name prominently displayed */}
        <div className="policy-card business-identity-card">
          <div className="biz-name-banner">
            <h2>Classic Fashion Point</h2>
            <span className="biz-type-badge">Retail Fashion Store</span>
          </div>
          <p className="biz-tagline">
            Your one-stop destination for premium fashion — clothing, footwear, and accessories for men, women, and kids across India.
          </p>
          <div className="biz-meta-row">
            <div className="biz-meta-item">
              <span className="biz-meta-label">Merchant Legal Entity Name</span>
              <span className="biz-meta-value"><strong>Classic Fashion Point</strong></span>
            </div>
            <div className="biz-meta-item">
              <span className="biz-meta-label">Business Type</span>
              <span className="biz-meta-value">Retail — Clothing &amp; Fashion</span>
            </div>
          </div>
        </div>

        {/* Contact Details */}
        <div className="policy-card">
          <h3 className="policy-section-title">Get In Touch</h3>
          <p className="policy-intro">
            Reach out to us using the details below. Our team responds within 24 business hours.
          </p>
          <div className="contact-grid">
            <div className="contact-item">
              <span className="contact-label">Registered Address</span>
              <span className="contact-value">174, 33 Feet Road, Sanjay Colony, Sector 23, Faridabad, Haryana — PIN: 121005</span>
            </div>
            <div className="contact-item">
              <span className="contact-label">Operational Address</span>
              <span className="contact-value">174, 33 Feet Road, Sanjay Colony, Sector 23, Faridabad, Haryana — PIN: 121005</span>
            </div>
            <div className="contact-item">
              <span className="contact-label">Phone</span>
              <span className="contact-value"><a href="tel:8295807935">+91 8295807935</a></span>
            </div>
            <div className="contact-item">
              <span className="contact-label">Email</span>
              <span className="contact-value"><a href="mailto:allu2001arjun@gmail.com">allu2001arjun@gmail.com</a></span>
            </div>
            <div className="contact-item">
              <span className="contact-label">Business Hours</span>
              <span className="contact-value">Monday – Saturday: 10:00 AM – 7:00 PM IST</span>
            </div>
          </div>
        </div>

        {/* What We Sell */}
        <div className="policy-card">
          <h3 className="policy-section-title">What We Offer</h3>
          <ul className="policy-list">
            <li><strong>Men's Wear</strong> — Polo shirts, jackets, chinos, t-shirts, formal shirts (₹699 – ₹2,499)</li>
            <li><strong>Women's Wear</strong> — Wrap dresses, hoodies, blouses, midi dresses (₹699 – ₹3,499)</li>
            <li><strong>Kids' Collection</strong> — Denim sets, frocks, graphic tees, winter tracksuits (₹599 – ₹1,299)</li>
            <li><strong>Footwear</strong> — Loafers, sandals, canvas sneakers, running shoes, school shoes (₹799 – ₹3,499)</li>
            <li><strong>Accessories</strong> — Necklaces, rings, earrings, sunglasses, tote bags (₹1,499 – ₹12,999)</li>
            <li><strong>Ethnic Wear</strong> — Kurta pyjama sets, Anarkali kurtis, lehenga choli, sherwani (₹1,299 – ₹8,999)</li>
          </ul>
        </div>

      </div>
    </div>
  )
}

export default ContactUs
