import React from 'react'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const cartItems = useSelector((store) => store.cart.items);
    return (
        <ul className='flex flex-row items-center justify-between bg-blue-200 shadow-md h-12'>
            <li className="mx-4"><NavLink to="/" >Home</NavLink></li>
            <li className="mx-4"><NavLink to="/cart" > CART - {cartItems.length} </NavLink></li>
            <li className="mx-4"><NavLink to="/about" >ABOUT</NavLink></li>
            <li className="mx-4"> <NavLink to="/login" >LogIn</NavLink> </li>
            <li className="mx-4" > <NavLink to="/signup" >SignUp</NavLink> </li>
            <li className="mx-4" > <NavLink to="/logout" >Logout</NavLink> </li>
        </ul>
    )
}

export default Navbar
