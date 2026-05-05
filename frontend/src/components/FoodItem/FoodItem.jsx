import React, { useContext, useState } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext';

const FoodItem = ({ image, name, price, desc, id, isNew, isSale, originalPrice, sizes }) => {

    const { cartItems, addToCart, removeFromCart, currency, wishlist, toggleWishlist } = useContext(StoreContext)
    const [selectedSize, setSelectedSize] = useState(sizes && sizes.length > 0 ? sizes[0] : null)

    return (
        <div className='food-item'>
            <div className='food-item-img-container'>
                <img className='food-item-image' src={image} alt={name} />

                {isSale && <span className='badge badge-sale'>SALE</span>}
                {isNew && !isSale && <span className='badge badge-new'>NEW</span>}

                <button
                    className={`wishlist-btn ${wishlist.has(id) ? 'wishlisted' : ''}`}
                    onClick={() => toggleWishlist(id)}
                    aria-label="Toggle wishlist"
                >
                    {wishlist.has(id) ? '♥' : '♡'}
                </button>

                {!cartItems[id]
                    ? <img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white} alt="Add to cart" />
                    : <div className="food-item-counter">
                        <img src={assets.remove_icon_red} onClick={() => removeFromCart(id)} alt="Remove" />
                        <p>{cartItems[id]}</p>
                        <img src={assets.add_icon_green} onClick={() => addToCart(id)} alt="Add" />
                    </div>
                }
            </div>

            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p className='food-item-name'>{name}</p>
                    <img src={assets.rating_starts} alt="rating" />
                </div>

                <p className="food-item-desc">{desc}</p>

                {sizes && sizes.length > 0 && (
                    <div className='size-selector'>
                        {sizes.map(s => (
                            <button
                                key={s}
                                className={`size-chip ${selectedSize === s ? 'active' : ''}`}
                                onClick={() => setSelectedSize(s)}
                            >
                                {s}
                            </button>
                        ))}
                    </div>
                )}

                <div className='food-item-price-row'>
                    <p className="food-item-price">{currency}{price.toLocaleString('en-IN')}</p>
                    {isSale && originalPrice && (
                        <p className='food-item-original-price'>{currency}{originalPrice.toLocaleString('en-IN')}</p>
                    )}
                    {isSale && originalPrice && (
                        <span className='discount-tag'>{Math.round((1 - price / originalPrice) * 100)}% off</span>
                    )}
                </div>
            </div>
        </div>
    )
}

export default FoodItem
