import React from 'react'
import './CustomerReview.css'
import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";
const CustomerReview = () => {
    const review = [
   {
        id: 1,
        name: "John Doe",
        comment: "A delightful experience! The flavors are rich and the atmosphere is welcoming. Truly a culinary masterpiece in every dish.",
        url:"https://zenzino.design/wp-content/uploads/2018/03/web-design-customer-first-mobile.jpg"
    },
    {
        id: 2,
        name: "Emily Smith",
        comment: "Incredible cuisine with impeccable service. Each bite was a journey through exquisite taste and aroma. Highly recommended!",
        url:"https://assets.ncr.com/content/ncr/us/en/home/blogs/restaurants/create-the-best-restaurant-website/_jcr_content/root/container/container_238116401_/container_1439208595/container_copy/image_copy_copy.coreimg.90.1000.jpeg/1663230680243/10-tips-090122.jpeg"
    },
   {
        id: 3,
        name: "Michael Johnson",
        comment: "From the fresh ingredients to the artistic presentation, every aspect of this restaurant is top-notch. A must-visit for food lovers.",
        url:"https://www.usfoods.com/our-services/business-trends/why-a-website-is-essential-for-your-restaurant/_jcr_content/pageImage.img.jpg/1557778245974.jpg"
    }
    ];

  return (
    <div>

        <div className="customerHeading">Customer's <span>Review</span></div>
    <div id='customerReview'>
        
        { 
            review.map((item,index)=>(
                <div className="review" key={index}>
                <div className="comment"><RiDoubleQuotesL size='1.5rem' color='red'/>{item.comment}<RiDoubleQuotesR size='1.5rem' color='red'/></div>
                <img src={item.url} alt="" srcset="" className='reviewImage'/>
                <div className="reviewName">{item.name}</div>
                </div>
            ))
        }
       
     
    </div>
    </div>
  )
}

export default CustomerReview
