import React from 'react'
import './OurBlogs.css';
const OurBlogs = () => {
    const blogPosts = [
       {
            id: 1,
            name: "The Secret to Our Signature Dish",
            imageUrl: "https://images.pexels.com/photos/4253312/pexels-photo-4253312.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            description: "Dive into the story behind our famous dish. Learn about the unique ingredients and the chef's special cooking techniques that make it a culinary sensation."
        },
        {
            id: 2,
            name: "Farm to Table: Our Fresh Ingredient Philosophy",
            imageUrl: "https://images.pexels.com/photos/3338674/pexels-photo-3338674.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            description: "Discover how our commitment to fresh, locally-sourced produce elevates the dining experience. This blog takes you on a journey from the local farms to our kitchen."
        },
          {
            id: 3,
            name: "A Day in the Life of Our Head Chef",
            imageUrl: "https://images.pexels.com/photos/35666/cooking-baby-only-kitchen.jpg?auto=compress&cs=tinysrgb&w=600",
            description: "Get an insider's look at the passion and dedication of our head chef. From early morning market visits to culinary creations, experience a day in their life."
        }
    ];
    
    
  return (
    <div >
        <div id="ourBlogs">
              <div className="blogHeading">Our <span>Blogs</span></div>
              <div className="blogs">
                {
                   blogPosts.map((item,index)=>(
                    <div className="blog">
                        <img src={item.imageUrl} alt="" srcset="" />
                        <div className="blogName">{item.name}</div>
                        <div className="blogDescription">{item.description}</div>
                        <button className="readMore">Read More</button>
                    </div>
                   ))
                }
                </div>
         
        </div>
      
    </div>
  )
}

export default OurBlogs
