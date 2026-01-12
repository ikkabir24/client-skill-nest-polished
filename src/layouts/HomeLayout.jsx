import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import { Outlet } from 'react-router';
import { ToastContainer } from 'react-toastify';

const HomeLayout = () => {
    return (
        <div className=' mx-auto'>
            <header className='sticky top-0 w-full z-50'>
                    <Navbar></Navbar>
                </header>

                <main>
                    <Outlet></Outlet>
                </main>

                <footer>
                    <Footer></Footer>
                </footer>
                <ToastContainer></ToastContainer>
        </div>
    );
};

export default HomeLayout;