import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Component/Home/Navbar/Navbar';

const Mainroute = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default Mainroute;