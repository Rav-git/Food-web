import React from 'react'
import './ShippingPolicy.css'

const ShippingPolicy = () => {
  return (
    <div className='policy-page'>
      <div className="policy-hero">
        <h1>Shipping Policy</h1>
        <p className="policy-date">Last updated on 03-05-2026</p>
      </div>
      <div className="policy-container">
        <div className="policy-card">
          <p className="policy-intro">
            At <strong>Classic Fashion Point</strong>, we strive to deliver your fashion orders as quickly and safely as possible. Please read our Shipping Policy carefully to understand our delivery timelines, shipping charges, and related processes.
          </p>

          <h3 className="policy-section-title">1. Free Local Delivery — Within 20 km</h3>
          <ul className="policy-list">
            <li><strong>FREE home delivery</strong> for all orders within <strong>20 km</strong> of our store at 174, 33 Feet Road, Sanjay Colony, Sector 23, Faridabad, Haryana — 121005.</li>
            <li>This covers Faridabad, Ballabhgarh, parts of Gurugram, Faridabad NIT, and surrounding areas — no minimum order value required.</li>
            <li>For local delivery, place your order online or call us at +91 8295807935 and we will arrange doorstep delivery.</li>
          </ul>

          <h3 className="policy-section-title">2. Shipping Coverage — Pan India</h3>
          <ul className="policy-list">
            <li>We also ship to all serviceable PIN codes across India through our trusted logistics partners.</li>
            <li>International shipping is not available at this time. We are working to expand our delivery network soon.</li>
          </ul>

          <h3 className="policy-section-title">3. Processing Time</h3>
          <ul className="policy-list">
            <li>Orders are processed within <strong>1–2 business days</strong> (Monday to Saturday, excluding public holidays) after payment confirmation.</li>
            <li>Orders placed on Sundays or public holidays will be processed on the next business day.</li>
            <li>You will receive an email and SMS confirmation with your order details once the order is placed successfully.</li>
          </ul>

          <h3 className="policy-section-title">4. Delivery Timelines</h3>
          <ul className="policy-list">
            <li><strong>Metro Cities</strong> (Delhi, Mumbai, Bengaluru, Chennai, Kolkata, Hyderabad): 2–4 business days after dispatch.</li>
            <li><strong>Tier 2 &amp; Tier 3 Cities:</strong> 4–7 business days after dispatch.</li>
            <li><strong>Remote &amp; Rural Areas:</strong> 7–10 business days after dispatch.</li>
            <li>Delivery timelines are estimates and may be affected by natural calamities, strikes, or other unforeseen circumstances.</li>
          </ul>

          <h3 className="policy-section-title">5. Shipping Charges</h3>
          <ul className="policy-list">
            <li><strong>FREE delivery</strong> for all orders within 20 km of our Faridabad store — no minimum order required.</li>
            <li><strong>Free Shipping</strong> on all pan-India orders above ₹999.</li>
            <li>A flat shipping fee of <strong>₹99</strong> applies to pan-India orders below ₹999.</li>
            <li>Express delivery (1–2 business days) is available in select cities for an additional charge of ₹199, displayed at checkout.</li>
          </ul>

          <h3 className="policy-section-title">6. Order Tracking</h3>
          <ul className="policy-list">
            <li>Once your order is dispatched, you will receive a tracking number via email and SMS.</li>
            <li>You can track your order in real time through our logistics partner's website or by visiting the "My Orders" section on our website after logging in.</li>
          </ul>

          <h3 className="policy-section-title">7. Failed Delivery Attempts</h3>
          <ul className="policy-list">
            <li>Our delivery partner will attempt delivery up to <strong>3 times</strong>. If all attempts fail, the package will be returned to our warehouse.</li>
            <li>In case of a returned shipment due to failed delivery or wrong address, re-shipping charges will apply.</li>
            <li>Please ensure the delivery address and phone number provided at checkout are accurate and complete.</li>
          </ul>

          <h3 className="policy-section-title">8. Damaged or Lost Shipments</h3>
          <ul className="policy-list">
            <li>If your package appears damaged upon delivery, please reject the shipment and contact us immediately at <strong>support@classicfashionpoint.com</strong>.</li>
            <li>In the rare event of a lost shipment, we will initiate an investigation with our logistics partner and arrange a replacement or full refund within <strong>7–10 business days</strong>.</li>
          </ul>

          <p style={{marginTop: '24px', fontSize: '0.9rem', color: '#888'}}>
            For any shipping-related queries, contact us at <strong>allu2001arjun@gmail.com</strong> or call <strong>+91 8295807935</strong> (Mon–Sat, 10 AM – 7 PM IST).
          </p>
        </div>
      </div>
    </div>
  )
}

export default ShippingPolicy
