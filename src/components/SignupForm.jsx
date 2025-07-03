import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link } from "react-router-dom";
import signup_page_image from "../assets/signup_page_image.jpg";
import logo from "../assets/logo.png";

const SignupForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <div className="flex flex-col md:flex-row w-full h-screen justify-between">
            <div className="flex flex-col justify-end items-center md:items-start w-full md:w-1/2 px-6 sm:px-8 py-8 overflow-y-auto">
                <div>
                    <img
                        src={logo}
                        alt="Logo"
                        className="w-44 h-10 mt-0 mb-6 md:mb-10 fixed top-12 left-12"
                    />
                </div>
                <div className="w-full max-w-sm md:max-w-md lg:max-w-sm mx-auto">
                    <h1 className="text-3xl font-bold mb-2">Welcome !!</h1>
                    <p className="text-gray-600 mb-6">Create Your Account</p>
                    <form className="space-y-4">
                        <div>
                            <label className="text-sm text-gray-700">
                                Username
                            </label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-400"
                            />
                        </div>
                        <div>
                            <label className="text-sm text-gray-700">
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Enter password"
                                    className="w-full border border-gray-300 rounded px-3 py-2 mt-1 pr-10 focus:outline-none focus:ring focus:border-blue-400"
                                />
                                <button
                                    type="button"
                                    onClick={() =>
                                        setShowPassword(!showPassword)
                                    }
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                                >
                                    {showPassword ? <FiEyeOff /> : <FiEye />}
                                </button>
                            </div>
                            <div className="flex justify-between items-center mt-1">
                                <label className="flex items-center text-sm">
                                    <input type="checkbox" className="mr-2" />
                                    Remember me
                                </label>
                                <Link
                                    to="/forgot-password"
                                    className="text-blue-500 text-sm"
                                >
                                    Forgot Password?
                                </Link>
                            </div>
                        </div>
                        <div>
                            <label className="text-sm text-gray-700">
                                Confirm Password
                            </label>
                            <div className="relative">
                                <input
                                    type={
                                        showConfirmPassword
                                            ? "text"
                                            : "password"
                                    }
                                    placeholder="Enter password"
                                    className="w-full border border-gray-300 rounded px-3 py-2 mt-1 pr-10 focus:outline-none focus:ring focus:border-blue-400"
                                />
                                <button
                                    type="button"
                                    onClick={() =>
                                        setShowConfirmPassword(
                                            !showConfirmPassword
                                        )
                                    }
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                                >
                                    {showConfirmPassword ? (
                                        <FiEyeOff />
                                    ) : (
                                        <FiEye />
                                    )}
                                </button>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition"
                        >
                            Create Account
                        </button>
                    </form>
                    <div className="flex items-center my-4">
                        <hr className="flex-grow border-gray-300" />
                        <span className="mx-2 text-gray-500">Or</span>
                        <hr className="flex-grow border-gray-300" />
                    </div>
                    <button className="w-full border border-gray-300 py-2 rounded flex items-center justify-center hover:bg-gray-100 transition">
                        <FcGoogle className="mr-2 text-xl" /> Sign in with
                        Google
                    </button>
                    <p className="text-center text-sm text-gray-600 mt-4">
                        Already have an account?{" "}
                        <Link to="/login" className="text-black font-medium">
                            Sign In
                        </Link>
                    </p>
                </div>
            </div>
            <div className="hidden md:block md:w-1/2 h-full lg:w-[487px]">
                <img
                    src={signup_page_image}
                    alt="Signup Visual"
                    className="w-full h-full object-cover object-center opacity-[80%]"
                />
            </div>
        </div>
    );
};

export default SignupForm;
