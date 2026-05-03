import React, { useState } from 'react'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Cart from './pages/Cart/Cart'
import CancellationRefund from './pages/CancellationRefund/CancellationRefund'
import ContactUs from './pages/ContactUs/ContactUs'
import TermsConditions from './pages/TermsConditions/TermsConditions'
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy'
import ShippingPolicy from './pages/ShippingPolicy/ShippingPolicy'
import LoginPopup from './components/LoginPopup/LoginPopup'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import MyOrders from './pages/MyOrders/MyOrders'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Verify from './pages/Verify/Verify'

const App = () => {

  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <ToastContainer />
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
          <Route path='/myorders' element={<MyOrders />} />
          <Route path='/verify' element={<Verify />} />
          <Route path='/cancellation-refund' element={<CancellationRefund />} />
          <Route path='/contact' element={<ContactUs />} />
          <Route path='/terms' element={<TermsConditions />} />
          <Route path='/privacy-policy' element={<PrivacyPolicy />} />
          <Route path='/shipping-policy' element={<ShippingPolicy />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
