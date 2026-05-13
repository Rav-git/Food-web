import React, { useState, useEffect, useRef } from 'react'
import './AnnouncementBar.css'

const messages = [
    "🚚 FREE Delivery within 20 km of our Faridabad store  |  Free shipping on orders above ₹999!",
    "📞 Call +91 8295807935 for Special Discounts & Exclusive Offers — Bulk orders welcome!",
    "New Arrivals every Friday  |  Call us for the latest deals & festival offers!",
    "Easy 7-day returns  |  Secure payments  |  Pan India delivery"
]

const AnnouncementBar = () => {
    const [visible, setVisible] = useState(true)
    const [msgIndex, setMsgIndex] = useState(0)
    const timerRef = useRef(null)

    const startTimer = () => {
        timerRef.current = setInterval(() => {
            setMsgIndex(i => (i + 1) % messages.length)
        }, 2000)
    }

    useEffect(() => {
        startTimer()
        return () => clearInterval(timerRef.current)
    }, [])

    const goTo = (dir) => {
        clearInterval(timerRef.current)
        setMsgIndex(i => (i + dir + messages.length) % messages.length)
        startTimer()
    }

    if (!visible) return null

    return (
        <div className='announcement-bar'>
            <button className='ann-nav' onClick={() => goTo(-1)}>‹</button>
            <p key={msgIndex} className='ann-msg'>{messages[msgIndex]}</p>
            <button className='ann-nav' onClick={() => goTo(1)}>›</button>
            <button className='ann-close' onClick={() => setVisible(false)}>✕</button>
        </div>
    )
}

export default AnnouncementBar
