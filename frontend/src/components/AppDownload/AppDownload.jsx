import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'

const AppDownload = () => {
    return (
        <div className='app-download' id='app-download'>
            <div className='app-download-text'>
                <p>Shop Smarter with the <br /><span>Classic Fashion Point App</span></p>
                <p className='app-download-sub'>Exclusive app-only deals, early access to sales, and a seamless shopping experience — all at your fingertips.</p>
            </div>
            <div className="app-download-platforms">
                <img src={assets.play_store} alt="Get it on Google Play" />
                <img src={assets.app_store} alt="Download on App Store" />
            </div>
        </div>
    )
}

export default AppDownload
