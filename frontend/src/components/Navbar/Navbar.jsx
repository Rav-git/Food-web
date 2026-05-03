import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext'

const Navbar = ({ setShowLogin }) => {

  const [menu, setMenu] = useState("home");
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate('/')
  }

  return (
    <div className='navbar'>
      <Link to='/' className='navbar-brand'>
        <span className='brand-name'>Classic Fashion Point</span>
      </Link>
      <ul className="navbar-menu">
        <Link to="/" onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</Link>
        <a href='#explore-menu' onClick={() => setMenu("shop")} className={menu === "shop" ? "active" : ""}>Shop</a>
        <a href='#explore-menu' onClick={() => setMenu("new")} className={menu === "new" ? "active" : ""}>New Arrivals</a>
        <a href='#footer' onClick={() => setMenu("contact")} className={menu === "contact" ? "active" : ""}>Contact</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="Search" />
        <Link to='/cart' className='navbar-search-icon'>
          <img src={assets.basket_icon} alt="Cart" />
          <div className={getTotalCartAmount() > 0 ? "dot" : ""}></div>
        </Link>
        {!token
          ? <button onClick={() => setShowLogin(true)}>Sign In</button>
          : <div className='navbar-profile'>
            <img src={assets.profile_icon} alt="Profile" />
            <ul className='navbar-profile-dropdown'>
              <li onClick={() => navigate('/myorders')}><img src={assets.bag_icon} alt="" /><p>My Orders</p></li>
              <hr />
              <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
            </ul>
          </div>
        }
      </div>
    </div>
  )
}

export default Navbar
