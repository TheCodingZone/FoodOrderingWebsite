import React, { useState } from 'react'
import wallpaper from '../Componants/Assets/Wallpaper.jpeg'
import './Wallpaper.css'
const Wallpaper = ({cartIsClicked,orderItem,setOrderedItem}) => {
  

  const cart=[{id:1,url:'https://images.pexels.com/photos/327158/pexels-photo-327158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',name:'Burger',price:299},{id:2,url:'https://images.pexels.com/photos/3053082/pexels-photo-3053082.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',name:'Pizza',price:299},{id:3,url:'https://images.pexels.com/photos/2092906/pexels-photo-2092906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',name:'Chawmin',price:199},{id:4,url:'https://images.pexels.com/photos/2313686/pexels-photo-2313686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',name:'Chicken',price:199},

];

  // Calculate the total amount
  const totalAmount = orderItem.reduce((total, item) => total + item.price, 0);
 
    const deleteHandler = (id) => {
      // Use setOrderedItem to update the state
     setOrderedItem((prevOrder) => {
        // Filter out the item with the given id
        const updatedOrder = prevOrder.filter((item) => item.id !== id);
        return updatedOrder;
      });
    };
    const[isClicked,setIsClicked]=useState(false);
  const confirmOrderHandler=(event)=>{
    event.preventDefault();
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 8000);
    setOrderedItem([]);
    
  }
  return (
    <div id="home">
      <div className='landingPage'>
        <div className="heading">
            <h1>GET THE <span>BEST FOOD </span><br />IN THE CITY</h1>
            
            <p>Indulge in a culinary journey at our restaurant, where delectable flavors meet exquisite ambiance. From mouthwatering dishes to a welcoming atmosphere, savor every moment of dining perfection with us.</p>
            <button className='orderButton'>ORDER NOW</button>
        </div>
        {
           cartIsClicked && (

        <div className="cartSection">
           <div className="cart-item">
            <h5>YOUR ORDERS</h5>
            {
              isClicked && 
              (
                <div className='conditional'>
                  Your Order Has Been Placed.Thanks For Ordering.
                  Want to order Again Please Visit our Menu Section.
                  <img src="https://as2.ftcdn.net/v2/jpg/01/67/44/09/1000_F_167440913_ai5ZyrlREVCvAwYvT04cJ8R2Ctwe6EUW.jpg" alt="" srcset="" />
                  <div className="orderAgain">Your Cart Is Empty.Order Again</div>
                </div>
              )
            }
             {orderItem && orderItem.length>0 && orderItem.map((item,index)=>(
                   <div key={index} className='cartDish'>
                     <img src={item.url} alt="" srcset="" />
                    <div className='name'>{item.name}</div>
                    <div className='price'>₹ {item.price}</div>
                    <button className='btn' onClick={()=>deleteHandler(item.id)}>Delete</button>
                    
                   </div>
                ))} 
                <hr />
                {
                  !isClicked && (
                    <div>
                    <div className="totalAmount">Total Amount:- <span className="price">₹{totalAmount}</span></div>
                  <button className='confirmBtn' onClick={confirmOrderHandler}>Confirm Order</button>
                  </div>
                  )
                }
           </div>
        </div>
            )
        }
      
    </div>
    </div>
  )
}

export default Wallpaper
