import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex  w-11/12 mx-auto  justify-center items-center py-2'>
           <div className='bg-gray-100 py-2 px-2'>
                <button className='btn px-6 py-3 bg-red-600 text-white font-semibold'>Latest</button>
           </div>
            <div className='bg-gray-100 '>
                <Marquee pauseOnHover speed={90}>
                    <p className='py-4 font-semibold  text-xl'> ipsum dolor, sit amet consectetur adipisicing elit. Ipsa vero quasi totam eius repudiandae inventore omnis quos laboriosam numquam excepturi? adipisicing elit. Unde dolorum hic vitae?</p>

                </Marquee>
          </div>
        </div>
    );
};

export default LatestNews;