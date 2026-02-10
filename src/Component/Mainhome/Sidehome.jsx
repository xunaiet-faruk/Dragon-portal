import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Sidehome = () => {
   
const [sideSection,setSidsection] =useState([])
    useEffect(()=>{

        fetch('/categories.json')
            .then(res => res.json())
            .then(data => setSidsection(data))
    },[])
    return (
        <div className='grid gap-4'>
           
            {
                sideSection.map(item => (<NavLink 
                    className={({ isActive }) =>
                        `block p-2 rounded ${isActive ? "bg-gray-200 text-black font-semibold text-xl" : "text-gray-600 text-lg"
                        }`
                    }

                    to={`/categorydtails/${item.id}`}>
                    {item?.name}
                </NavLink>))
            }
        </div>
    );
};

export default Sidehome;