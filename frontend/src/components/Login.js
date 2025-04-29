import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authActions } from '../store/authSlice';

const Login = () => {
    const [input, setInput] = useState({ email: "", password: "" });
    const change = (e) => {
        const { name, value } = e.target;
        setInput({ ...input, [name]: value });
    }
    const dispatch = useDispatch();
    const history = useNavigate();
    const btnHandler = async () => {
        await axios.post(`https://digital-diner-app-backend.onrender.com/login`, input)
            .then(res => {
                // console.log(res.data.message);
                if (res.data.message === "Incorrect Password / Email Please Check") {
                    setInput({ email: "", password: "" });
                } else {
                    sessionStorage.setItem('user', res.data.message);
                    // console.log("LoggedIn Successfully");
                    dispatch(authActions.login());
                    history("/");
                }
            })
            .catch((err) => {
                console.log(err);

            })
    }
    return (

        <div className="min-h-[90vh] flex flex-col items-center justify-center bg-gradient-to-br from-lime-200 to-lime-400 px-4">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                Already have an account? Please log in below
            </h3>
            <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg border border-green-300">
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        E-mail
                    </label>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        onChange={change}
                        value={input.email}
                        className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                        placeholder="you@example.com"
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                        Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        onChange={change}
                        value={input.password}
                        className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                        placeholder="••••••••"
                    />
                </div>
                <button
                    type="submit"
                    onClick={btnHandler}
                    className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg text-lg font-semibold transition duration-300"
                >
                    Submit
                </button>
            </div>
        </div>

    )
}

export default Login
