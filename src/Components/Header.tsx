import { url } from 'inspector'
import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../Assets/icon.svg'
import Navbar from './Navbar'

const Header = () => {
  return (
    <header>
        <NavLink to={"/"}>
            <img src={logo} alt="logo"></img>
        </NavLink>
        <Navbar/>
    </header>
  )
}

export default Header