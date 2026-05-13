import React from 'react'
import './OfferBanner.css'

const offers = [
    { icon: "📞", title: "Call for Special Discounts", desc: "Get exclusive phone-only deals & festival offers. Call +91 8295807935" },
    { icon: "🛍️", title: "Bulk Order Offers", desc: "Buying 5+ items? Get special bulk pricing on all categories." },
    { icon: "🎉", title: "New Customer Discount", desc: "First order? Ask us about our new customer welcome discount." },
]

const OfferBanner = () => {
    return (
        <div className='offer-banner'>
            <div className='offer-banner-heading'>
                <h2>Special Discounts &amp; Exclusive Offers</h2>
                <p>Contact us directly to unlock the best deals — available for phone orders, bulk purchases &amp; loyal customers.</p>
            </div>
            <div className='offer-cards'>
                {offers.map((o, i) => (
                    <div key={i} className='offer-card'>
                        <span className='offer-icon'>{o.icon}</span>
                        <div>
                            <h3>{o.title}</h3>
                            <p>{o.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
            <a href='tel:+918295807935' className='offer-cta'>
                📞 Call Now: +91 8295807935 &nbsp;|&nbsp; Mon–Sat, 10 AM – 7 PM
            </a>
        </div>
    )
}

export default OfferBanner
