import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import CategoriCard from './CategoriCard';

const Categorydetails = () => {
    const [categori,setCategori] =useState([])
    const {id} =useParams()
    const data =useLoaderData()
    useEffect(()=>{
        if(id == "0"){
            setCategori(data);
            return;
        }else if(id == "1"){
            const categoriesData = data.filter(news => news.others.is_today_pick == true)
            setCategori(categoriesData);


        }else{
            const categoriesData = data.filter(news => news.category_id == id)
            setCategori(categoriesData);
        }
        

   
    },[data,id])
    
    return (
        <div>
           <h1 className='text-xl font-semibold '>Dragon News Home : {categori.length}</h1>

          <div className='mt-4'>
                {
                    categori.map(card => <CategoriCard key={card.id} card={card} />)
                }
          </div>

        </div>
    );
};

export default Categorydetails;