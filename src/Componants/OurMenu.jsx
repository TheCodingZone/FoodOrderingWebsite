import React, { useState } from 'react'
import './OurMenu.css';
const OurMenu = (props) => {
    const[alert,setAlert]=useState(false);
    const cart=[{id:1,url:'https://images.pexels.com/photos/327158/pexels-photo-327158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',name:'Burger',price:299},{id:2,url:'https://images.pexels.com/photos/3053082/pexels-photo-3053082.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',name:'Pizza',price:299},{id:3,url:'https://images.pexels.com/photos/2092906/pexels-photo-2092906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',name:'Chow Mein',price:199},{id:4,url:'https://images.pexels.com/photos/2313686/pexels-photo-2313686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',name:'Chicken',price:199},{id:5,url:'https://images.pexels.com/photos/3010753/pexels-photo-3010753.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',name:'Burger Special',price:199},{id:6,url:'https://images.pexels.com/photos/1438672/pexels-photo-1438672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',name:'Pasta',price:199},{id:7,url:'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',name:'Paneer',price:199},{id:8,url:'https://images.pexels.com/photos/9283102/pexels-photo-9283102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',name:'Mix Chaat',price:199},{id:9,url:'https://images.pexels.com/photos/15529651/pexels-photo-15529651/free-photo-of-photo-of-a-plate-of-pasta-with-meatballs.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',name:'Noodles',price:199},{id:10,url:'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',name:'Best Dish',price:249}

];
const placeOrderHandler = (item) => {
  // Check if the item is already present in the cart
  const isItemAlreadyInCart = props.orderItem.some((cartItem) => cartItem.id === item.id);

  // If the item is not already in the cart, add it
  if (!isItemAlreadyInCart) {
    props.setOrderedItem((preOrder) => [...preOrder, item]);
  } else {
    // You can handle the case where the item is already in the cart (optional)
    console.log(`Item  ${item.name} Already Present In The cart`);
    setAlert(true);
    setTimeout(() => {
      
      setAlert(false);
    }, 2000);
    }
};

  return (
    <div>
     <div className="OurMenuHeading">OUR <span>MENU</span></div>
      {
    alert && (
      <div className='alertMessage'>
        Item Already Present In The Cart.
      </div>
    )
  }
      
    <div id='ourMenu'>
     
     {cart.map((item,index)=>(
        <div className="menu" key={index}>
          <img src={item.url} alt="" srcset="" />
          <div className='name'>{item.name}</div>
          <div className='itemprice'>₹ {item.price}</div>
          <button className="placeOrder" onClick={()=>placeOrderHandler(item)}>Place Order</button>
        </div>
     ))}
    </div>
    </div>
  )
}

export default OurMenu
