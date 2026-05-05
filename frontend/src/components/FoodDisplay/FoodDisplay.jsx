import React, { useContext, useState } from 'react'
import './FoodDisplay.css'
import FoodItem from '../FoodItem/FoodItem'
import { StoreContext } from '../../Context/StoreContext'

const FoodDisplay = ({ category }) => {

    const { food_list, searchTerm } = useContext(StoreContext)
    const [sortBy, setSortBy] = useState('default')

    let filtered = food_list.filter(item => {
        const matchCategory = category === "All" || category === item.category
        const q = searchTerm.toLowerCase()
        const matchSearch = !q ||
            item.name.toLowerCase().includes(q) ||
            item.category.toLowerCase().includes(q) ||
            item.description.toLowerCase().includes(q)
        return matchCategory && matchSearch
    })

    if (sortBy === 'price-asc') filtered = [...filtered].sort((a, b) => a.price - b.price)
    else if (sortBy === 'price-desc') filtered = [...filtered].sort((a, b) => b.price - a.price)
    else if (sortBy === 'new') filtered = [...filtered].sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0))
    else if (sortBy === 'sale') filtered = [...filtered].sort((a, b) => (b.isSale ? 1 : 0) - (a.isSale ? 1 : 0))

    return (
        <div className='food-display' id='food-display'>
            <div className='food-display-header'>
                <h2>{category === "All" ? "All Products" : category}</h2>
                <div className='sort-controls'>
                    <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
                        <option value='default'>Sort: Featured</option>
                        <option value='price-asc'>Price: Low → High</option>
                        <option value='price-desc'>Price: High → Low</option>
                        <option value='new'>New Arrivals First</option>
                        <option value='sale'>On Sale First</option>
                    </select>
                </div>
            </div>

            {searchTerm && (
                <p className='search-results-info'>
                    {filtered.length > 0
                        ? <>Showing <strong>{filtered.length}</strong> result{filtered.length !== 1 ? 's' : ''} for "<strong>{searchTerm}</strong>"</>
                        : <>No results for "<strong>{searchTerm}</strong>"</>
                    }
                </p>
            )}

            <div className='food-display-list'>
                {filtered.length === 0
                    ? <div className='no-results'>
                        <p>😔 No products found.</p>
                        <p>Try a different search term or browse a category.</p>
                    </div>
                    : filtered.map(item => (
                        <FoodItem
                            key={item._id}
                            image={item.image}
                            name={item.name}
                            desc={item.description}
                            price={item.price}
                            id={item._id}
                            isNew={item.isNew}
                            isSale={item.isSale}
                            originalPrice={item.originalPrice}
                            sizes={item.sizes}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default FoodDisplay
