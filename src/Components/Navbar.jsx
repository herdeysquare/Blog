import '../css/Navbar.css'
import React from 'react'
import Search from '../Images/search.png'
import user from '../Images/user.png'
import trolley from '../Images/trolley.png'
import ShoppingBag from '../Images/shopping-bag.png'
import { Link } from "react-router-dom"




const Navbar = () => {
  return (<>
  <marquee behavior="" direction="">We Are Open!!. 🎲Delivery within Lagos (1-3 days). 🎲Delivery Outside Lagos (3-7 days).</marquee> 
  
    <div className='navbar'>
      <nav className="list">
        <Link to="/"><li>Home</li></Link>
        <Link to="/Brands"><li>Brands</li></Link>
       <Link to="/Products"><li>Products</li></Link> 
       <Link to="/Shop"><li>Shop</li></Link> 
      </nav>
      
      <h3 className='beau'>Beau_tified Enterprises</h3>

      <div className="icon">
        <img src={Search} alt='search' className='icons' />
        <img src={user} alt="profile-image" className='icons' />
        <img src={trolley} alt="trolley" className='icons' />
        <img src={ShoppingBag} alt="shopping-bag" className='icons' />

      </div>

    </div>



  </>
  )
}

export default Navbar