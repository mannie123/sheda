

import React, { useState, useEffect } from 'react'





const Cart = () => {

   const [cart,setCart]=useState([])
   

useEffect(() => {
  
  
        

        setCart(JSON.parse(localStorage.getItem("cart")));
        console.log(cart)
        }, [])


  return (


    <>
    

    
    </>
  )
}

export default Cart