import React from 'react'
import './AboutUs.css';
import image01 from '../Componants/Assets/image01.jpeg'
const AboutUs = () => {
  return (
    <div id='aboutUs'>
      <div className='aboutHeading'><span>ABOUT</span> US</div>

      <div className="aboutSection">
        <div className="left">
            <img src='https://images.pexels.com/photos/3010753/pexels-photo-3010753.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt="" srcset="" />
        </div>
        <div className="right">
            <h2>WHAT'S MAKE OUR FOOD <span>SPECIAL</span></h2>
            <p>Our restaurant prides itself on delivering a unique dining experience. Our food stands out with a commitment to quality, using fresh, locally-sourced ingredients prepared with passion and precision. From signature burgers to global cuisine, each dish is a harmonious blend of tradition and innovation. Our culinary artisans strive for excellence, creating flavors that tantalize the taste buds. It's not just a meal; it's a celebration of culinary artistry, where every bite tells a story of dedication and a quest for unparalleled dining satisfaction.
            </p>
            <button className="readMore">Read More</button>
        </div>

      </div>
    </div>
  )
}

export default AboutUs
