import React, { useContext } from 'react'
import { useState } from 'react'
// import {CartContext} from "../../context/cartContext"

import { productList } from '../../testData/productList'


import "./Products.css"

const Products = () => {
  const [searchInput, setSearchInput] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(Infinity)
  // const {productList} = useContext(CartContext);

  console.log(productList)

  const handleSearchInput = (e) => {
    setSearchInput(e.target.value)
  }

  const searchFilterProducts = (product) => (
    product.name.toLowerCase().includes(searchInput)
  )


  const handleMinPrice = (e) => {
    setMinPrice(e.target.value);
  }

  const handleMaxPrice = (e) => {
    setMaxPrice(e.target.value);
  }
  // const filter = items.filter((item) => item.price > 10);
  const minmaxFilterProducts = (product) => (
    product.price > minPrice && product.price < maxPrice
  )

  return (
    <div className='products-page-container'>
      <div className='products-filtering-container'>
        <div className='products-search-container'>
          <input type="text" placeholder='Search' value={searchInput} onChange={handleSearchInput} />
        </div>
        <div className='products-filters-container'>
          <div className='products-price-range'>
            <div className='minimum-price'>
              <div className='minimum-price-text'>
                Minimum price:
              </div>
              <div className='minimum-price-value'>
                <input type="text" value={minPrice} onChange={handleMinPrice} />
              </div>
            </div>
            <div className='minimum-price'>
              <div className='minimum-price-text'>
                Maximum price:
              </div>
              <div className='minimum-price-value'>
                <input type="text" value={maxPrice} onChange={handleMaxPrice} />
              </div>
            </div>
          </div>
          {/* sort by price and date */}
        </div>
        <div className='products-sort-container'>
          <select name="Sort by" id="">
            <option value="default">Order by</option>
            <option value="">Price (ASC)</option>
            <option value="">Price (DESC)</option>
            <option value="">Date adde(ASC)</option>
            <option value="">Date added(DESC)</option>
          </select>
        </div>
      </div>
      <div className='products-container'>
        {productList.filter(searchFilterProducts).filter(minmaxFilterProducts).map((item) => {
          return (
            <div className='product-item-container' key={item.id}>
              <img src={item.img} alt={item.id} />
              <div className='product-name'>{item.name}</div>
              <div className='product-description'>{item.description}</div>
              <div className='price-add-to-cart-container'>
                <div className='product-price'>${item.price}</div>
                <button className='product-add-button'> ADD TO CART</button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Products