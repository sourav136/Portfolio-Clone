import React from 'react';
import './Nav.css'
import { Link, useLocation } from 'react-router-dom';
import Logo from '../../assets/Images/Logo name.png'

const Nav = () => {
    const location = useLocation();
    return (
        <div>
            <div className="mainNav" id='main-nav'>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link to="/" className={`nav-link ${location.pathname === "/" ? "nav-active":""}`}>
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/about" className={`nav-link ${location.pathname === "/about" ? "nav-active":""}`}>
                                        About me
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <img src={Logo} alt="" className='logo' />
                                </li>
                                <li className="nav-item">
                                    <Link to="/work" className={`nav-link ${location.pathname === "/work" ? "nav-active":""}`}>
                                        Work
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/contact" className={`nav-link ${location.pathname === "/contact" ? "nav-active":""}`}>
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Nav;