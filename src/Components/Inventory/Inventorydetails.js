import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Inventorydetails = () => {
    const { id } = useParams();
    const [details, setDetails]= useState({})
    const [ quantity , setQuantity]= useState(0)
   
  useEffect(()=>{
    const url =`http://localhost:5000/inventory/${id}`
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
       console.log(stingNewquantity );
        const url =`http://localhost:5000/delivered/${id}`
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
//  console.log(details.quantity);
    return (
        <div className='text-center'>
            <h1>he:{id}</h1>
            <p>{details?.title}</p>
            <p className='font-semibold'>{quantity}</p>
            <button onClick={deleverdbtnHandle} className='border px-5 py-2 bg-green-600 text-white'>Delivered</button>

        </div>
    );
};

export default Inventorydetails;