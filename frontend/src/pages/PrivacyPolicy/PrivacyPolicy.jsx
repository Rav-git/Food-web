import React from 'react'
import './PrivacyPolicy.css'

const PrivacyPolicy = () => {
  return (
    <div className='policy-page'>
      <div className="policy-hero">
        <h1>Privacy Policy</h1>
        <p className="policy-date">Last updated on 03-05-2026</p>
      </div>
      <div className="policy-container">
        <div className="policy-card">
          <p className="policy-intro">
            At <strong>Classic Fashion Point</strong>, we are committed to protecting your privacy. This Privacy Policy
            explains how we collect, use, disclose, and safeguard your personal information when you visit our website
            or make a purchase from us.
          </p>

          <h3 className="policy-section-title">1. Information We Collect</h3>
          <ul className="policy-list">
            <li><strong>Personal Identification Information:</strong> Name, email address, phone number, billing and shipping address when you register or place an order.</li>
            <li><strong>Payment Information:</strong> We do not store your full card details. Payments are processed through secure, PCI-DSS compliant payment gateways. We only receive a transaction confirmation.</li>
            <li><strong>Device &amp; Usage Data:</strong> Browser type, IP address, pages visited, time spent on pages, and referring URLs — collected automatically to improve your experience.</li>
            <li><strong>Cookies:</strong> We use cookies and similar tracking technologies to enhance functionality, remember preferences, and analyse site traffic. You can disable cookies in your browser settings.</li>
          </ul>

          <h3 className="policy-section-title">2. How We Use Your Information</h3>
          <ul className="policy-list">
            <li>To process and fulfil your orders, and send order confirmations and shipping updates.</li>
            <li>To communicate with you about products, promotions, and updates (you can opt out at any time).</li>
            <li>To improve our website, product range, and customer service.</li>
            <li>To prevent fraud and ensure the security of our platform.</li>
            <li>To comply with applicable legal obligations.</li>
          </ul>

          <h3 className="policy-section-title">3. Sharing of Information</h3>
          <ul className="policy-list">
            <li>We do not sell, trade, or rent your personal information to third parties.</li>
            <li>We may share data with trusted service providers (logistics partners, payment processors) solely to fulfil your orders and operate our website — they are bound by confidentiality obligations.</li>
            <li>We may disclose information if required by law, court order, or government authority.</li>
          </ul>

          <h3 className="policy-section-title">4. Data Retention</h3>
          <ul className="policy-list">
            <li>We retain your personal data for as long as your account is active or as needed to provide our services and comply with legal obligations.</li>
            <li>You may request deletion of your account and associated data at any time by contacting our support team.</li>
          </ul>

          <h3 className="policy-section-title">5. Your Rights</h3>
          <ul className="policy-list">
            <li>You have the right to access, correct, or delete your personal data held by us.</li>
            <li>You may opt out of marketing communications at any time by clicking the "Unsubscribe" link in any email we send.</li>
            <li>For any privacy-related requests, contact us at <strong>allu2001arjun@gmail.com</strong>.</li>
          </ul>

          <h3 className="policy-section-title">6. Security</h3>
          <ul className="policy-list">
            <li>We implement industry-standard security measures (SSL encryption, secure servers) to protect your personal information.</li>
            <li>However, no method of transmission over the Internet is 100% secure. We encourage you to use a strong, unique password for your account.</li>
          </ul>

          <h3 className="policy-section-title">7. Changes to This Policy</h3>
          <ul className="policy-list">
            <li>We may update this Privacy Policy from time to time. Changes will be posted on this page with a revised "Last updated" date. Continued use of our website after changes constitutes acceptance of the updated policy.</li>
          </ul>

          <p style={{marginTop: '24px', fontSize: '0.9rem', color: '#888'}}>
            If you have any questions about this Privacy Policy, please contact us at <strong>allu2001arjun@gmail.com</strong> or call <strong>+91 8295807935</strong>.
          </p>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicy
