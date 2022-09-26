import React, { useContext } from 'react'
// import {CartContext} from "../../context/cartContext"

import { productList } from '../../testData/productList'


import "./Products.css"

const Products = () => {
  // const {productList} = useContext(CartContext);

  console.log(productList)

  return (
    <div className='products-page-container'>
      <div className='products-container'>
        {productList.map((item) => {
          return (
            <div className='product-item-container' key={item.id}>
              <img src={item.img} alt={item.id} />
              <div className='product-name'>{item.name}</div>
              <div className='product-description'>{item.description}</div>
              <div className='product-price'>${item.price}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Products