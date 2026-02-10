import React, { Suspense, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Sidesections from './Sidesections';

const Sidehome = () => {
   

    return (
        <div className='grid gap-4'>
           
            <Suspense fallback={<span className="loading loading-infinity loading-2xl"></span>}>
                <Sidesections/>
            </Suspense>
        </div>
    );
};

export default Sidehome;