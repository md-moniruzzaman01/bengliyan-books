import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import LoadingScreen from '../SharedPageSection/LoadingScreen';

const Inventorydetails = () => {
    const { id } = useParams();
    const [details, setDetails]= useState({})
    const [ quantity , setQuantity]= useState(0)
    
   
  useEffect(()=>{
    const url =`https://guarded-dusk-72997.herokuapp.com/inventory/${id}`
   
     
    fetch(url)
   .then(res=>res.json())
   .then(data=>{
    setQuantity(data.quantity);
       setDetails(data)
    
   })
  },[quantity])
  
      
 
   

    const deleverdbtnHandle =()=>{
        const newquantity= parseInt(details.quantity) + 1
       
        
       const stingNewquantity = newquantity + ''
       
        const url =`https://guarded-dusk-72997.herokuapp.com/delivered/${id}`
       fetch(url,{
      
            method: 'PUT',
            headers: { 
                'Content-Type': 'application/json',
               
            },
            body: JSON.stringify({quantity: stingNewquantity})
       
       })
       .then(res=> res.json())
       .then(data=>{
        //    console.log(data)
       })
       
       setQuantity(newquantity)
        
        
    }

    
    return (
        <div className='grid grid-cols-1 container md:grid-cols-2'>
            <div className='flex justify-center mt-5'>
                <img className='w-8/12 h-auto max-h-[650px]' src={details?.image} alt="" />
            </div>
            <div className='pl-5 mt-5  flex  items-center'>


            <div className='space-y-5'>
            <h1 className='text-2xl font-semibold text-gray-900'>{details?.title}</h1>
            <p >supplier name : {details?.supplierName}</p>
            <p >Availability :<span className='bg-gray-300 px-3 py-2 rounded-full mx-2 font-semibold'> {quantity} </span> <span className=' font-semibold'>in stack</span></p>
            <p className='text-2xl font-semibold  '>Price : <span className='text-green-400'>${details?.price}</span> </p>
            <div className=' w-10/12'>
                <p>{details?.discribtion}</p>
            </div>
            <p></p>
            <button onClick={deleverdbtnHandle} className='border px-5 py-2 bg-green-600 text-white'>Delivered</button>
            </div>
            </div>

        </div>
    );
};

export default Inventorydetails;