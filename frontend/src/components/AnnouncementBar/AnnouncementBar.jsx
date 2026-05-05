import React, { useState, useEffect, useRef } from 'react'
import './AnnouncementBar.css'

const messages = [
    "FREE SHIPPING on orders above ₹999  |  Use code FIRST10 for 10% off your first order!",
    "New Arrivals every Friday  |  Follow us for the latest fashion drops!",
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
