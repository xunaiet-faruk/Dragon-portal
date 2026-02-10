import React, { use } from 'react';
import { NavLink } from 'react-router-dom';

const sectionS = fetch('/categories.json')
            .then(res => res.json())
            

const Sidesections = () => {

    const SectionCategori =use(sectionS)
    console.log(SectionCategori);
    return (
        <div>

            {
                SectionCategori.map(item => (<NavLink 
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

export default Sidesections;