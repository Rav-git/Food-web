import React, { useContext, useState } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext';
import { Blurhash } from 'react-blurhash';

const FoodItem = ({ image, name, price, desc, id, blurhash }) => {

    const [itemCount, setItemCount] = useState(0);
    const { cartItems, addToCart, removeFromCart, url, currency } = useContext(StoreContext);
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <div className='food-item'>
            <div className='food-item-img-container'>
                {blurhash && !imageLoaded && (
                    <div className="blurhash-container" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
                        <Blurhash
                            hash={blurhash}
                            width="100%"
                            height="100%"
                            resolutionX={32}
                            resolutionY={32}
                            punch={1}
                        />
                    </div>
                )}
                <img
                    className='food-item-image'
                    src={url + "/images/" + image}
                    alt=""
                    onLoad={() => setImageLoaded(true)}
                    style={{ display: imageLoaded ? 'block' : 'none' }}
                />
                {!imageLoaded && !blurhash && <div className="food-item-image-placeholder"></div>}

                {!cartItems[id]
                    ? <img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white} alt="" />
                    : <div className="food-item-counter">
                        <img src={assets.remove_icon_red} onClick={() => removeFromCart(id)} alt="" />
                        <p>{cartItems[id]}</p>
                        <img src={assets.add_icon_green} onClick={() => addToCart(id)} alt="" />
                    </div>
                }
            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{name}</p> <img src={assets.rating_starts} alt="" />
                </div>
                <p className="food-item-desc">{desc}</p>
                <p className="food-item-price">{currency}{price}</p>
            </div>
        </div>
    )
}

export default FoodItem
