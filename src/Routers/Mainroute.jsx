import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Component/Home/Navbar/Header';
import Navbar from '../Component/Home/Navbar/Navbar';
import LatestNews from '../Component/Home/Navbar/LatestNews';

const Mainroute = () => {
    return (
        <div>
            <Header/>
            <LatestNews />
           
            <Navbar />
            <Outlet />
        </div>
    );
};

export default Mainroute;