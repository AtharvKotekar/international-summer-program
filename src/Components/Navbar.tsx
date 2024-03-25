import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="menuIcon">
        <ul className="navbar-list">
            <li>
                <NavLink to={'/how-to-apply'}>
                    How to apply
                </NavLink>
            </li>
            <li>
                <NavLink to={'/curriculum'}>
                    Curriculum
                </NavLink>
            </li>
            <li>
                <NavLink to={'/tutions-and-aid'}>
                    Tuition & Aid
                </NavLink>
            </li>
            <li>
                <NavLink to={'/contact'}>
                    Contact
                </NavLink>
            </li>
            <li>
                <NavLink to={'/about'}>
                    About
                </NavLink>
            </li>
        </ul>
    </div>
  )
}

export default Navbar