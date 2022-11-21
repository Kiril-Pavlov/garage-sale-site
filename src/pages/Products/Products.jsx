import React, { useContext } from 'react'
import { useState } from 'react'
// import {CartContext} from "../../context/cartContext"

import { productList } from '../../testData/productList'


import "./Products.css"

const Products = ({cartItems}) => {
  const [searchInput, setSearchInput] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(Infinity);
  const [sortChoise,setSortChoise] = useState("");
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

  const minmaxFilterProducts = (product) => (
    product.price > minPrice && product.price < maxPrice
  )

  const handleSortChange = (e) => {
    setSortChoise(e.target.value)
  }

  const changeSorting = () =>{
    if(sortChoise === "priceAsc"){
      return(
        (a,b)=>a.price-b.price
      )
    }
  }

  const addToCart = (item) => {
    console.log(item.id)
    cartItems.push({
      id:item.id,
      name:item.name,
      price:item.price,
      img:item.img
    })
    console.log("cart",cartItems)
  }


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
          <select name="Sort by" id="" onChange={handleSortChange}>
            <option value="default">Order by</option>
            <option value="priceAsc">Price (ASC)</option>
            <option value="priceDesc">Price (DESC)</option>
            <option value="name">Name</option>
          </select>
        </div>
      </div>
      <div className='products-container'>
        {productList.filter(searchFilterProducts)
                    .filter(minmaxFilterProducts)
                    .sort(sortChoise === "priceAsc" ? 
                          (a,b)=>a.price-b.price:
                          sortChoise ==="priceDesc" ?
                          (a,b)=>b.price-a.price :
                          sortChoise ==="name" ?
                          (a,b) => {
                            if(a.name.toLowerCase()<b.name.toLowerCase()){return -1}
                            if(a.name.toLowerCase()>b.name.toLowerCase()){return 1}
                          } : 
                          (a,b)=>a.price-b.price
                    )
                    .map((item) => {
          return (
            <div className='product-item-container' key={item.id}>
              <img src={item.img} alt={item.id} />
              <div className='product-name'>{item.name}</div>
              <div className='product-description'>{item.description}</div>
              <div className='price-add-to-cart-container'>
                <div className='product-price'>${item.price}</div>
                <button className='product-add-button' onClick={()=>addToCart(item)}> ADD TO CART</button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Products