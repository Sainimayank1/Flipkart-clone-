import React from 'react'
import '../styles/navbar.css'
const navbar = () => {
  return (
    <>
        <navbar className="navbar bg-blue">
            <div className='navbar-main-box'>
            <div className='navbar-logo'>
              <img src="./logo1.png" alt='logo'></img>
              <div>Explore <p>Plus*</p></div>
            </div>

              <div className='navbar-search'>
                <form>
                  <input type="text" placeholder='Search for products , brands and more'></input>
                </form>
              </div>

              <div className='navbar-login blue'>Login</div>

              <div className='navbar-seller'>Become a Seller</div>

              <div className='navbar-more'>More</div>

              <div className='navbar-cart'> <i class="fa-solid fa-cart-shopping"></i> Cart</div>
             
            </div>
        </navbar>
    </>
  )
}

export default navbar