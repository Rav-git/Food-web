import React, { useContext, useState, useEffect } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext'

const Navbar = ({ setShowLogin }) => {

    const [menu, setMenu] = useState("home")
    const [scrolled, setScrolled] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)
    const [searchOpen, setSearchOpen] = useState(false)
    const { getTotalCartCount, token, setToken, searchTerm, setSearchTerm } = useContext(StoreContext)
    const navigate = useNavigate()

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const logout = () => {
        localStorage.removeItem("token")
        setToken("")
        navigate('/')
    }

    const closeMenu = () => setMobileOpen(false)

    const cartCount = getTotalCartCount()

    return (
        <>
            <div className={`navbar ${scrolled ? 'scrolled' : ''}`}>
                <Link to='/' className='navbar-brand' onClick={closeMenu}>
                    <span className='brand-name'>Classic Fashion Point</span>
                </Link>

                <ul className={`navbar-menu ${mobileOpen ? 'open' : ''}`}>
                    <Link to="/" onClick={() => { setMenu("home"); closeMenu() }} className={menu === "home" ? "active" : ""}>Home</Link>
                    <a href='#explore-menu' onClick={() => { setMenu("shop"); closeMenu() }} className={menu === "shop" ? "active" : ""}>Shop</a>
                    <a href='#explore-menu' onClick={() => { setMenu("new"); closeMenu() }} className={menu === "new" ? "active" : ""}>New Arrivals</a>
                    <a href='#footer' onClick={() => { setMenu("contact"); closeMenu() }} className={menu === "contact" ? "active" : ""}>Contact</a>
                </ul>

                <div className="navbar-right">
                    <button
                        className='search-toggle'
                        onClick={() => { setSearchOpen(s => !s); if (searchOpen) setSearchTerm('') }}
                        aria-label="Search"
                    >
                        <img src={assets.search_icon} alt="Search" />
                    </button>

                    <Link to='/cart' className='navbar-cart-icon'>
                        <img src={assets.basket_icon} alt="Cart" />
                        {cartCount > 0 && <span className='cart-count'>{cartCount}</span>}
                    </Link>

                    {!token
                        ? <button className='signin-btn' onClick={() => setShowLogin(true)}>Sign In</button>
                        : <div className='navbar-profile'>
                            <img src={assets.profile_icon} alt="Profile" />
                            <ul className='navbar-profile-dropdown'>
                                <li onClick={() => navigate('/myorders')}><img src={assets.bag_icon} alt="" /><p>My Orders</p></li>
                                <hr />
                                <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
                            </ul>
                        </div>
                    }

                    <button
                        className={`hamburger ${mobileOpen ? 'open' : ''}`}
                        onClick={() => setMobileOpen(o => !o)}
                        aria-label="Toggle menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>

            {searchOpen && (
                <div className='search-overlay'>
                    <div className='search-overlay-inner'>
                        <input
                            autoFocus
                            type='text'
                            placeholder='Search for products, categories...'
                            value={searchTerm}
                            onChange={e => setSearchTerm(e.target.value)}
                            onKeyDown={e => e.key === 'Escape' && setSearchOpen(false)}
                        />
                        {searchTerm && (
                            <button className='search-clear' onClick={() => setSearchTerm('')}>✕</button>
                        )}
                        <button className='search-close-btn' onClick={() => { setSearchOpen(false); setSearchTerm('') }}>
                            Close
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}

export default Navbar
