import React from 'react'
import './Navbar.css'
import logo from './amazon_logo.png'
const Navbar = () => {
    return (
        <>



            <nav>
                <div className="left">
                    <div className="nav-logo border">
                        <img src={logo} alt="" />
                    </div>
                    <div className="nav-location">
                        <div className="locatin-icon">
                            <i class="ri-map-pin-line"></i>
                        </div>
                        <div className="address">
                            <span className='line-1'>Divliver to Prashant</span>
                            <span className='line-2'>Purnia 853204</span>
                        </div>
                    </div>
                </div>

                <div className="nav-search">
                    <select>
                        <option>All</option>
                    </select>
                    <input type="text" />
                    <div className="search-box">
                        <i class="ri-search-line"></i>
                    </div>
                </div>

                <div className="right">
                    <div className="country">
                        India
                    </div>
                    <div className="account-types">
                        <span className='line-1'>Hello,Prashant</span>
                        <select className='line-2'>
                            <option>Account & List type</option>
                        </select>
                    </div>

                    <div className="nav-order">
                        <span className='line-1'>Returns</span>
                        <span className='line-2'>& Oreder</span>
                    </div>
                    <div className="nav-cart">

                        <span className="icon">
                            <div className="number-of-item">0</div>
                            <i class="ri-shopping-cart-line"></i></span>
                        <span className='cart'>Cart</span>
                    </div>
                </div>
            </nav>


        </>
    )
}

export default Navbar