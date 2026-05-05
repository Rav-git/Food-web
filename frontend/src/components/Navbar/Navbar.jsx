import React, { useContext, useState, useEffect, useRef } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext'

const Navbar = ({ setShowLogin }) => {

    const [menu, setMenu] = useState("home")
    const [scrolled, setScrolled] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)
    const [searchOpen, setSearchOpen] = useState(false)
    const [suggestions, setSuggestions] = useState([])
    const searchRef = useRef(null)
    const { getTotalCartCount, token, setToken, searchTerm, setSearchTerm, food_list } = useContext(StoreContext)
    const navigate = useNavigate()

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    // Close suggestions on outside click
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (searchRef.current && !searchRef.current.contains(e.target)) {
                setSuggestions([])
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    const handleSearchChange = (e) => {
        const value = e.target.value
        setSearchTerm(value)
        if (value.trim().length >= 1) {
            const q = value.toLowerCase()
            const matched = food_list
                .filter(item =>
                    item.name.toLowerCase().includes(q) ||
                    item.category.toLowerCase().includes(q) ||
                    item.description.toLowerCase().includes(q)
                )
                .slice(0, 6)
            setSuggestions(matched)
        } else {
            setSuggestions([])
        }
    }

    const handleSuggestionClick = (item) => {
        setSearchTerm(item.name)
        setSuggestions([])
        setSearchOpen(false)
        setTimeout(() => {
            const el = document.getElementById('food-display')
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 80)
    }

    const handleSearchSubmit = () => {
        if (!searchTerm.trim()) return
        setSuggestions([])
        setSearchOpen(false)
        setTimeout(() => {
            const el = document.getElementById('food-display')
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 80)
    }

    const closeSearch = () => {
        setSearchOpen(false)
        setSearchTerm('')
        setSuggestions([])
    }

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
                        onClick={() => { setSearchOpen(s => !s); if (searchOpen) closeSearch() }}
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
                <div className='search-overlay' ref={searchRef}>
                    <div className='search-overlay-inner'>
                        <img src={assets.search_icon} className='search-icon-sm' alt="" />
                        <input
                            autoFocus
                            type='text'
                            placeholder='Search for shirts, dresses, shoes...'
                            value={searchTerm}
                            onChange={handleSearchChange}
                            onKeyDown={e => {
                                if (e.key === 'Escape') closeSearch()
                                if (e.key === 'Enter') handleSearchSubmit()
                            }}
                        />
                        {searchTerm && (
                            <button className='search-clear' onClick={() => { setSearchTerm(''); setSuggestions([]) }}>✕</button>
                        )}
                        <button className='search-close-btn' onClick={closeSearch}>Close</button>
                    </div>

                    {suggestions.length > 0 && (
                        <div className='search-suggestions'>
                            {suggestions.map(item => (
                                <div
                                    key={item._id}
                                    className='suggestion-item'
                                    onClick={() => handleSuggestionClick(item)}
                                >
                                    <span className='suggestion-name'>{item.name}</span>
                                    <span className='suggestion-cat'>{item.category}</span>
                                </div>
                            ))}
                            <div className='suggestion-view-all' onClick={handleSearchSubmit}>
                                View all results for "<strong>{searchTerm}</strong>" →
                            </div>
                        </div>
                    )}

                    {searchTerm && suggestions.length === 0 && (
                        <div className='search-suggestions'>
                            <div className='suggestion-empty'>No products match "<strong>{searchTerm}</strong>"</div>
                        </div>
                    )}
                </div>
            )}
        </>
    )
}

export default Navbar
