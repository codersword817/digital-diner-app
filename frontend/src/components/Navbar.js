import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <ul className='flex flex-row '>
            <li><NavLink to="/" >Home</NavLink></li>
            <li>CART</li>
            <li><NavLink to="/about" >ABOUT</NavLink></li>
            <li> <NavLink to="/login" >LogIn</NavLink> </li>
            <li > <NavLink to="/signup" >SignUp</NavLink> </li>
            <li > <NavLink to="/logout" >Logout</NavLink> </li>
        </ul>
    )
}

export default Navbar
