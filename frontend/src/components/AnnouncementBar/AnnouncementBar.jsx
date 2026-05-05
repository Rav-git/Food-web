import React, { useState } from 'react'
import './AnnouncementBar.css'

const AnnouncementBar = () => {
    const [visible, setVisible] = useState(true)
    const [msgIndex, setMsgIndex] = useState(0)

    const messages = [
        "FREE SHIPPING on orders above ₹999  |  Use code FIRST10 for 10% off your first order!",
        "New Arrivals every Friday  |  Follow us for the latest fashion drops!",
        "Easy 7-day returns  |  Secure payments  |  Pan India delivery"
    ]

    if (!visible) return null

    return (
        <div className='announcement-bar'>
            <button className='ann-nav' onClick={() => setMsgIndex(i => (i - 1 + messages.length) % messages.length)}>‹</button>
            <p>{messages[msgIndex]}</p>
            <button className='ann-nav' onClick={() => setMsgIndex(i => (i + 1) % messages.length)}>›</button>
            <button className='ann-close' onClick={() => setVisible(false)}>✕</button>
        </div>
    )
}

export default AnnouncementBar
