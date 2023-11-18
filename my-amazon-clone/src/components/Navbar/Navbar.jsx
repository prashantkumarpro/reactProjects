import React from 'react'
import './Navbar.css'
import logo from './amazon_logo.png'
const Navbar = () => {
    return (
        <>


            <nav>
                <div className='nav-part1'>
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
                </div>
                <div className="nav-part2">
                    <div className="left">
                        <i class="ri-menu-line"></i>
                        <h3>All</h3>
                    </div>
                    <div className="shop-container">
                        <ul className="shop-link">
                            <li> <a href="#"> Amazon miniTV </a></li>
                            <li> <a href="#"> Prime </a></li>
                            <li> <a href="#"> Sell </a></li>
                            <li> <a href="#"> Amazon Pay </a></li>
                            <li> <a href="#"> Subscrive And Save </a></li>
                            <li> <a href="#"> Buy Again </a></li>
                            <li> <a href="#"> Cupon </a></li>
                            <li> <a href="#"> Gift Card </a></li>
                        </ul>
                    </div>
                    <div className="right">
                        <ul className='right-con'>
                            <li><a href="#">New Launches from Mobile,</a></li>
                            <li><a href="#">Electronics & more</a></li>
                        </ul>


                    </div>

                </div>
            </nav>


        </>
    )
}

export default Navbar