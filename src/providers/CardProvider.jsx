import { createContext, useState } from "react"

export const CardContext=createContext(null)
const CardProvider = ({children}) => {
    const [cartItems,setCartItems]=useState([])
   const  cartinfo={
cartItems,setCartItems
    }
  return (
    <CardContext.Provider value={cartinfo}>{children}</CardContext.Provider>
  )
}

export default CardProvider