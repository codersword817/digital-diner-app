import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';


const Signup = () => {
    const [input, setInput] = useState({ email: "", username: "", password: "" });
    const history = useNavigate();
    const change = (e) => {
        const { name, value } = e.target;
        setInput({ ...input, [name]: value })
    }
    const btnHandler = async () => {
        await axios.post("https://digital-diner-app-backend.onrender.com/api/v1/register", input)
            .then(res => {
                if (res.data.message === "User is already Created") {
                    alert("User already Exists! Please LogIn Instead")
                } else {

                    history("/login")
                    setInput({ email: "", username: "", password: "" });
                }
            });

    }

    return (
        <>
            <div className="min-h-[90vh] flex flex-col items-center justify-center bg-gradient-to-br from-lime-200 to-lime-400 px-4">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                    New Here? Sign Up Below
                </h3>
                <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl border border-green-300">
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                            Username
                        </label>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            value={input.username}
                            onChange={change}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                            placeholder="Enter your username"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            E-mail
                        </label>
                        <input
                            type="text"
                            name="email"
                            id="email"
                            value={input.email}
                            onChange={change}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                            placeholder="you@example.com"
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            value={input.password}
                            onChange={change}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
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
        </>

    )
}

export default Signup
