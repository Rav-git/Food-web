import React, { useContext } from 'react'
import './FoodDisplay.css'
import FoodItem from '../FoodItem/FoodItem'
import { StoreContext } from '../../Context/StoreContext'

const FoodDisplay = ({ category }) => {

  const { food_list, searchQuery } = useContext(StoreContext);

  return (
    <div className='food-display' id='food-display'>
      <h2>Top dishes near you</h2>
      <div className='food-display-list'>
        {food_list.map((item) => {
          if (category === "All" || category === item.category) {
            if (searchQuery === "" || item.name.toLowerCase().includes(searchQuery.toLowerCase())) {
              return <FoodItem key={item._id} image={item.image} name={item.name} desc={item.description} price={item.price} id={item._id} blurhash={item.blurhash} />
            }
          }
        })}
      </div>
    </div>
  )
}

export default FoodDisplay
