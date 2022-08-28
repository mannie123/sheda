import React, { useState, useEffect } from 'react'
import "../Pages/first.css"
import { Link } from 'react-router-dom';

import { data } from "../Data.js";


const First = () => {

  const [feed, setFeed] = useState(data);
  
const [cart,setCart] = useState([])

const addCart=(food)=>{
    
  cart.push(food)

  // console.log(cart);
  
  localStorage.setItem("cart",JSON.stringify(cart))
}

useEffect(() => {
  
  
// leggo()
  //  console.log()


}, [])

console.log(JSON.parse(localStorage.getItem("food")));

const removeCart =()=>{
 // alert(localStorage.getItem("name"))
 localStorage.removeItem("food")
  
}

const leggo =()=>{

  localStorage.setItem("food",JSON.stringify(data))

}


  return (
    <>


<div className="card-container">
      {feed.map((food) => {
 
        const { id, title, price, img } = food;

        return (
          <div key={id} className='item'> 

            <div className="inner">
              <img src={img} alt="" />

              </div>
                  
              <div className="content">

                <h4>{title}</h4>
                <h4>{price}</h4>
              </div>

              {/* <button className='btn' onClick={() => setQuantity((quantity - 1))}>decrease</button>
              {price}
              <button className='btn' onClick={() => setQuantity(quantity + 1)}>increase</button> */}

              <button onClick={() => addCart(food)}>add to cart </button>

          </div>

            

        );
      })}


</div>
{/* 
<button onClick={() => leggo()}>to add</button>
<button onClick={() => removeCart()}>to remove</button> */}


<Link to='/Cart'>Cart</Link>

    </>
  );



}

export default First