import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { authActions } from '../store/authSlice';
import { useDispatch, useSelector } from 'react-redux';

const Navbar = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        if (sessionStorage.getItem("user")) {
            dispatch(authActions.login());
        }
    }, []);


    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    return (
        <ul className='flex flex-row items-center justify-between bg-blue-200 shadow-md h-12'>
            <li className="mx-4"><NavLink to="/" >Home</NavLink></li>
            <li className="mx-4"><NavLink to="/cart" > VIEW-CART </NavLink></li>
            {
                !isLoggedIn &&
                <>
                    <li className="mx-4"> <NavLink to="/login" >LogIn</NavLink> </li>
                    <li className="mx-4" > <NavLink to="/signup" >SignUp</NavLink> </li>
                </>
            }
            {
                isLoggedIn &&
                <>
                    <li className="mx-4"><NavLink to="/history" >History</NavLink></li>
                    <li className="mx-4" > <NavLink to="/logout" >Logout</NavLink> </li>
                </>
            }
        </ul>
    )
}

export default Navbar
