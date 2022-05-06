
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BooksCard from './BooksCard';
import Carousol from './Carousol';


const Home = () => {
    const [homebooks, gethomebooks]= useState([]);
    const navigate = useNavigate()
    
      useEffect(()=>{
        fetch('https://guarded-dusk-72997.herokuapp.com/homebooks')
        .then(res=> res.json())
        .then(data=>{
            gethomebooks(data)
            
        })
       
      },[])
      
     
        const updatebtnHandle =(_id)=>{
            navigate(`/inventory/${_id}`);
        }
    return (
        <div className='mb-72'>
           <Carousol></Carousol>
            
            <div>
                <div className='pt-11 space-y-3 '>
                    <h1 className='text-gray-900 font-roboto text-center text-4xl font-bold'>Inventory</h1>
                    <p className='text-center text-gray-500'>Reading helps you developing your communication
                    skills</p>
                </div>
               <div className='container mx-auto  pt-5 grid grid-cols-1  gap-7 md:grid-cols-2 lg:grid-cols-3'>
               {
                homebooks.map(book=> <BooksCard updatebtnHandle={updatebtnHandle} book={book} key={book._id}></BooksCard>)
                }
               </div>
            </div>
            
        </div>
    );
};

export default Home;