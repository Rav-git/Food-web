import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import TrustBadges from '../../components/TrustBadges/TrustBadges'
import Newsletter from '../../components/Newsletter/Newsletter'

const Home = () => {

    const [category, setCategory] = useState("All")

    return (
        <>
            <Header />
            <TrustBadges />
            <ExploreMenu setCategory={setCategory} category={category} />
            <FoodDisplay category={category} />
            <Newsletter />
        </>
    )
}

export default Home
