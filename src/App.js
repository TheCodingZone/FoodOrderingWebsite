import logo from './logo.svg';
import './App.css';
import Navbar from './Componants/Navbar';
import Wallpaper from './Componants/Wallpaper';
import { useState } from 'react';
import AboutUs from './Componants/AboutUs';
import OurMenu from './Componants/OurMenu';
import CustomerReview from './Componants/CustomerReview'
import OurBlogs from './Componants/OurBlogs';
import ContactUs from './Componants/ContactUs';
import Footer from './Componants/Footer';
function App() {
  const[cartIsClicked,setCartIsClicked]=useState(false);
  const [orderItem,setOrderedItem]=useState([]);
  return (
    <div className="App">
    <Navbar setCartIsClicked={setCartIsClicked} length={orderItem.length}/>
    <Wallpaper cartIsClicked={cartIsClicked} orderItem={orderItem} setOrderedItem={setOrderedItem}  length={orderItem.length}/>
    <AboutUs/>
    <OurMenu orderItem={orderItem} setOrderedItem={setOrderedItem}/>
    <CustomerReview/>
    <ContactUs/>
    <OurBlogs/>
    <Footer/>
    </div>
  );
}

export default App;
