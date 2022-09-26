import React,{useContext} from 'react'
// import {CartContext} from "../../context/cartContext"

import { productList } from '../../testData/productList'


import "./Products.css"

const Products = () => {
  // const {productList} = useContext(CartContext);

  console.log(productList)

  return (
    <div>
      {productList.map((item) => {
        return (
          <div className='product-item' key={item.id}>
            <img src={item.img} alt={item.id} />
            {item.name}
          </div>
        )
      })}
    </div>
  )
}

export default Products