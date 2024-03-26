import { url } from 'inspector';
import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../Assets/icon.svg';
import search_icon from '../Assets/search-icon.svg';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>

            <a href="/">
                <img src={logo} alt="logo" className='logo_icon' ></img>
            </a>

            <ul className='navbar-list'>
                <li>
                    <a href="/how-to-apply">
                        How to apply
                    </a>
                </li>
                <li>
                    <a href="/curriculum">
                        Curriculum
                    </a>
                </li>
                <li>
                    <a href="/tutions-and-aid">
                        Tuition & Aid
                    </a>
                </li>
                <li>
                    <a href="/contact">
                        Contact
                    </a>
                </li>
                <li>
                    <a href="/about">
                        About
                    </a>
                </li>

            </ul>
            <a href="/">
                <img src={search_icon} alt="search" className='search_icon'></img>
            </a>





        </div>
    );
}

export default Header;