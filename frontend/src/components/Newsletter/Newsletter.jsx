import React, { useState } from 'react'
import './Newsletter.css'

const Newsletter = () => {
    const [email, setEmail] = useState('')
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (email.trim()) setSubmitted(true)
    }

    return (
        <div className='newsletter'>
            <div className='newsletter-content'>
                <h2>Stay in Style</h2>
                <p>Subscribe to get exclusive offers, early access to new arrivals, and fashion tips straight to your inbox.</p>
                {!submitted
                    ? <form className='newsletter-form' onSubmit={handleSubmit}>
                        <input
                            type='email'
                            placeholder='Enter your email address'
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required
                        />
                        <button type='submit'>Subscribe</button>
                    </form>
                    : <p className='newsletter-success'>🎉 You're subscribed! Expect amazing deals soon.</p>
                }
                <p className='newsletter-note'>No spam, unsubscribe anytime.</p>
            </div>
        </div>
    )
}

export default Newsletter
