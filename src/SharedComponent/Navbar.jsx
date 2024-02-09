import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaHome } from "react-icons/fa";

const Navbar = () => {
    return (
        <div className="navbar bg-blue-900 sticky top-0 z-10 ps-10 pe-20 lg:pe-10">
            <div className='navbar-start'>
                <Link to="/" className="text-white md:text-xl font-bold">User&nbsp;Mangement</Link>
            </div>
            <div className="navbar-end">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="text-white lg:hidden">
                        <FaBars></FaBars>
                    </div>
                    <ul tabIndex={0} className="dropdown-content mt-3 z-10 p-2 shadow bg-blue-100 rounded">
                        <li><NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'default')}><FaHome></FaHome>Home</NavLink></li>
                    </ul>
                </div>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="px-1">
                    <li><NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'default')}><FaHome></FaHome> Home Page</NavLink></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;