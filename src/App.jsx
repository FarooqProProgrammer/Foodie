import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import FoodMenu from './components/FoodMenu'
import PopularCategories from './components/PopularCategories'
import NewsLetter from './components/Newsletter'

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <FoodMenu title={'Super Delicious'} />
      <FoodMenu title={'Sweet Tooth'} />
      <PopularCategories title={'Popular Categories'} />
      <NewsLetter />
    </div>
  )
}

export default App
