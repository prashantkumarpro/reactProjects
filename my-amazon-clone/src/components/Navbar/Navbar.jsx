import React from 'react'
import './Navbar.css'
import logo from './logo.jpg'
const Navbar = () => {
    return (
        <>

            <header>

                <nav>
                    <div className="left">
                        <div className="logo">
                            <img src={logo} alt="" />
                        </div>
                        <div className="nav-location">
                            <div className="locatin"></div>
                            <div className="address">
                                <p>Divliver to Prashant</p>
                                <p>Purnia 853204</p>
                            </div>
                        </div>
                    </div>
                    <div className="nav-search">
                        <select name="" id="">
                            <option value="All">All</option>
                        </select>
                        <input type="text" />
                        <input type="button" value="submit" />
                    </div>
                    <div className="right">
                        <div className="country"></div>
                        <div className="account-types">
                            <p>Hello,Prashant</p>
                           <select name="" id="">Account & List type
                           <option value=""></option>
                           <option value=""></option>
                           <option value=""></option>
                           </select>
                        </div>
                        <div className="nav-order"></div>
                        <div className="nav-cart"></div>
                    </div>
                </nav>

            </header >
        </>
    )
}

export default Navbar