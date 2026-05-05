import React from 'react'
import './TrustBadges.css'

const badges = [
    { icon: "🚚", title: "Free Delivery", subtitle: "On orders above ₹999" },
    { icon: "↩️", title: "Easy Returns", subtitle: "7-day hassle-free returns" },
    { icon: "🔒", title: "Secure Payment", subtitle: "100% safe checkout" },
    { icon: "💬", title: "24/7 Support", subtitle: "We're always here" },
]

const TrustBadges = () => {
    return (
        <div className='trust-badges'>
            {badges.map((b, i) => (
                <div key={i} className='trust-badge'>
                    <span className='trust-icon'>{b.icon}</span>
                    <div className='trust-text'>
                        <p className='trust-title'>{b.title}</p>
                        <p className='trust-subtitle'>{b.subtitle}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default TrustBadges
