import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider';
import { toast } from 'react-toastify';
import WebLogo from '../../shared/WebLogo';
import NavRoute from '../../shared/NavRoute';
import userAvatar from '../../assets/user.png';
import { IoIosHome } from 'react-icons/io';
import { MdBallot, MdContactPhone, MdSpaceDashboard } from 'react-icons/md';
import { FaInfoCircle } from 'react-icons/fa';
import { LuLogIn, LuLogOut, LuUserRoundPlus, LuUser } from 'react-icons/lu';
import { ThemeContext } from '../../provider/ThemeProvider';
import ThemeToggle from '../../shared/ThemeToggle';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const { theme, setTheme } = useContext(ThemeContext);

    useEffect(() => {
        const html = document.documentElement;
        html.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const handleLogout = async () => {
        try {
            await logOut();
            toast.success('Logged out successfully');
        } catch (err) {
            toast.error(err.message);
        }
    };

    const handleThemeToggle = (checked) => {
        setTheme(checked ? 'dark' : 'light');
    };

    const navLinks = (
        <>
            <NavRoute>
                <NavLink to="/">
                    <p className="flex items-center gap-1">
                        <IoIosHome /> Home
                    </p>
                </NavLink>
            </NavRoute>

            <NavRoute>
                <NavLink to="/allCourses">
                    <p className="flex items-center gap-1">
                        <MdBallot /> All Courses
                    </p>
                </NavLink>
            </NavRoute>

            <NavRoute>
                <NavLink to="/contactUs">
                    <p className="flex items-center gap-1">
                        <MdContactPhone /> Contact
                    </p>
                </NavLink>
            </NavRoute>

            <NavRoute>
                <NavLink to="/aboutUs">
                    <p className="flex items-center gap-1">
                        <FaInfoCircle /> About
                    </p>
                </NavLink>
            </NavRoute>

            {user && (
                <NavRoute>
                    <NavLink to="/dashboard">
                        <p className="flex items-center gap-1">
                            <MdSpaceDashboard /> Dashboard
                        </p>
                    </NavLink>
                </NavRoute>
            )}
        </>
    );

    return (
        <header className="bg-base-100 shadow-sm">
            <nav className="navbar mx-auto container px-6 md:px-12 md:py-4">
                <div className="navbar-start">

                    <div className="dropdown lg:hidden space-x-1">
                        <label tabIndex={0} className="btn btn-ghost bg-primary/20">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </label>

                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
                        >
                            {navLinks}
                        </ul>
                    </div>

                    <WebLogo />
                </div>

                {/* CENTER */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal gap-4">{navLinks}</ul>
                </div>

                {/* RIGHT */}
                <div className="navbar-end">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    src={user?.photoURL || userAvatar}
                                    alt="User Avatar"
                                />
                            </div>
                        </label>

                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
                        >
                            {user ? (
                                <>

                                    <li onClick={handleLogout}>
                                        <span className="flex items-center gap-2">
                                            <LuLogOut /> Logout
                                        </span>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li>
                                        <Link to="/login" className="flex items-center gap-2">
                                            <LuLogIn /> Login
                                        </Link>
                                    </li>

                                    <li>
                                        <Link to="/register" className="flex items-center gap-2">
                                            <LuUserRoundPlus /> Register
                                        </Link>
                                    </li>
                                </>
                            )}

                            <li className="mt-2">
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        className="toggle"
                                        checked={theme === 'dark'}
                                        onChange={(e) => handleThemeToggle(e.target.checked)}
                                    />
                                    <span>Dark Mode</span>
                                </label>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
