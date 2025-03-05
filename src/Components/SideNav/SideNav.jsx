import React from 'react';
import './SideNav.css';
import { LiaHomeSolid } from "react-icons/lia";
import { FaRegUser } from "react-icons/fa6";
import { IoBagOutline } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import { Link, useLocation } from 'react-router-dom';

const SideNav = () => {
    const location = useLocation();
    return (
        <div>
            <div className="SideNav">
                <Link to="/" className={location.pathname === "/" ? "active" : ""}>
                    <LiaHomeSolid  className={`SideNav-item ${location.pathname === "/" ? "active-item" : ""}`} />
                </Link>
                <Link to="/about" className={location.pathname === "/about" ? "active" : ""}>
                    <FaRegUser className={`SideNav-item ${location.pathname === "/about" ? "active-item" : ""}`} />
                </Link>
                <Link to="/work" className={location.pathname === "/work" ? "active" : ""}>
                    <IoBagOutline className={`SideNav-item ${location.pathname === "/work" ? "active-item" : ""}`} />
                </Link>
                <Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>
                    <BsFillTelephoneFill className={`SideNav-item ${location.pathname === "/contact" ? "active-item" : ""}`} />
                </Link>
            </div>
        </div>
    );
};

export default SideNav;