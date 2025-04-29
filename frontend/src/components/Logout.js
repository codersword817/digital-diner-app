import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { authActions } from '../store/authSlice';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(authActions.logout());
        sessionStorage.clear("user");
        navigate("/");
    }, [dispatch, navigate]);

    return <div></div>;
}

export default Logout;
