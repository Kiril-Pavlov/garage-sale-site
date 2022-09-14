import React from 'react'

import Hero from "./components/Hero/Hero"
import Promotion from "./components/Promotion/Promotion"
import NewProducts from "./components/NewProducts/NewProducts"

import "./Home.css"

const Home = () => {
  return (
    <div>
      <Hero />
      <Promotion />
      <NewProducts />
    </div>
  )
}

export default Home