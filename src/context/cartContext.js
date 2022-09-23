import { useState } from "react";
import { createContext } from "react"

import {productList} from "../testData/productList"



const CartContext=createContext();

const CartProvider = ({children}) =>{
    const [cartItems, setCartItems] = useState({});

    const value = { productList };
    return <CartContext.Provider value={productList}>{children}</CartContext.Provider>;
}

export {CartContext, CartProvider}