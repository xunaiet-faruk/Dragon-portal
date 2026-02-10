import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Component/Home/Navbar/Header';
import Navbar from '../Component/Home/Navbar/Navbar';

const Mainroute = () => {
    return (
        <div>
            <Header/>
           
            <Outlet/>
            <Navbar />
        </div>
    );
};

export default Mainroute;