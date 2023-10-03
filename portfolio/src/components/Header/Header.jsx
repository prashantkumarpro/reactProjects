import React from 'react'
import { Link } from "react-router-dom";
import './Header.css'

const Header = () => {
    return (
        <>

            <header className="hero">
                <h1 className="logo">port<span>Folio</span> </h1>
                <div className="ham-button">
                    <i className="ri-menu-3-line ham_menu" id="ham_menu"></i>
                    <i className="fa-solid fa-xmark ham_close" id="ham_close"></i>
                </div>

                <nav id="navbar" className="nav-links">
                    <div className="links">
                        <Link className='active' to="/">Home</Link>
                        <Link to="About" >About</Link>
                        <Link to="Skills">Skills</Link>
                        <Link to="Projects">Projects</Link>
                        <Link to="Blog">Blog</Link>
                        <Link to="Contact">Contact</Link>
                    </div>

                </nav>

            </header>

        </>
    )
}

export default Header