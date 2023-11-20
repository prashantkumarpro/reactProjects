import React from 'react'
import './Navbar.css'
import logo from './amazon_logo.png'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <>


            <nav>
                <div className='nav-part1'>
                    <div className="left">
                        <Link to="/" className="nav-logo border">
                            <img src={logo} alt="" />
                        </Link>
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
                            <li> <Link to="/Mobile"> Mobile</Link></li>
                            <li> <Link to="prime"> Prime</Link></li>
                            <li> <Link> Prime</Link></li>
                            <li> <Link> Amazon miniTV</Link></li>
                            <li> <Link> Sell</Link></li>
                            <li> <Link> Amazon Pay</Link></li>
                            <li> <Link> Subscrive And Save</Link></li>
                            <li> <Link> Buy Again</Link></li>
                            <li> <Link> Cupon</Link></li>
                            <li> <Link> Gift Card</Link></li>
                        </ul>
                    </div>
                    <div className="right">
                        <ul className='right-con'>
                            <li><Link>New Launches from Mobile,</Link></li>
                            <li><Link>Electronics & more</Link></li>
                        </ul>


                    </div>

                </div>
            </nav>


        </>
    )
}

export default Navbar