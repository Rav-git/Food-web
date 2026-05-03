import React, { useContext } from 'react'
import './ExploreMenu.css'
import { StoreContext } from '../../Context/StoreContext'

const ExploreMenu = ({ category, setCategory }) => {

  const { menu_list } = useContext(StoreContext);

  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Shop by Category</h1>
      <p className='explore-menu-text'>Explore our wide range of fashion categories — from everyday casuals to festive ethnic wear, we have something for everyone in the family.</p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)} key={index} className='explore-menu-list-item'>
              <img src={item.menu_image} className={category === item.menu_name ? "active" : ""} alt={item.menu_name} />
              <p>{item.menu_name}</p>
            </div>
          )
        })}
      </div>
      <hr />
    </div>
  )
}

export default ExploreMenu
