import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Componants/Assets/logo.png'
import { FaCartPlus } from "react-icons/fa6";

const Navbar = ({setCartIsClicked ,length}) => {
    const[searchClicked,setSearchClicked]=useState(false);
    
    const searchClickHandler=(event)=>{
        event.preventDefault();
        setSearchClicked((preState)=>!preState);
    }
    const cartHandler=(event)=>{
        event.preventDefault();
        setSearchClicked(false);
        setCartIsClicked((preState)=>!preState);

    }
  return (
   
      <div className="header">
          <div className="logo">
               <img src={logo} alt="" srcset="" />
          </div>
          <nav className="navbar">
            <a href="#home">Home</a>
            <a href="#aboutUs">About</a>
            <a href="#ourMenu">Our Menu</a>
            <a href="#customerReview">Review</a>
            <a href="#contactUs">Contact Us</a>
            <a href="#ourBlogs">Our Blogs</a>
            <a href=""onClick={searchClickHandler}>Search</a>
            
          </nav>
          {
            searchClicked &&(

          <div className="search-form" >
            <input type="search" placeholder='TYPE TO SEARCH' id='search-box'></input>
            <label htmlFor="search-box" className="fa-solid fa-magnifying-glass"></label>
            
            <label htmlFor="search-box"></label>
          </div>
            )
          }
         
          <div className="cart" onClick={cartHandler}>
            <div className="cart-icon">
            <FaCartPlus/>
             <span className='totalItem'>{length}</span>
            
            <span className='icon-span'>Cart Items</span>
            </div>
          </div>
          

      </div>
    
  )
}

export default Navbar
