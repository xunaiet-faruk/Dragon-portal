import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Component/Home/Navbar/Header';
import Navbar from '../Component/Home/Navbar/Navbar';
import LatestNews from '../Component/Home/Navbar/LatestNews';
import Footer from '../Component/Home/Footer';

const Mainroute = () => {
    return (
        <div>
            <Header/>
            <LatestNews />
           
            <Navbar />
            <Outlet />
            <Footer/>
        </div>
    );
};

export default Mainroute;