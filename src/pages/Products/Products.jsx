import React, { useContext } from 'react'
import { useState } from 'react'
// import {CartContext} from "../../context/cartContext"

import { productList } from '../../testData/productList'


import "./Products.css"

const Products = () => {
  const [searchInput,setSearchInput] = useState("")
  // const {productList} = useContext(CartContext);

  console.log(productList)
  
  const handleSearchInput = (e) => {
    setSearchInput(e.target.value)
  }




  return (
    <div className='products-page-container'>
      <div className='products-search-container'>
        <input type="text" placeholder='Search' value={searchInput} onChange={handleSearchInput}/>
      </div>
      <div className='products-filters-container'>
        {/* order by price,date
        tags */}
      </div>
      <div className='products-container'>
        {productList.filter(product => (product.name.toLowerCase().includes(searchInput))).map((item) => {
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