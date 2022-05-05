import axios from 'axios';
import React, { useEffect } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
const ManageCard = () => {
    useEffect(()=>{
        axios.get('http://localhost:5000/all')
    },[])
    return (
        <div>
        <div class="flex relative my-5   mx-auto  items-center  rounded-lg  shadow-md md:flex-row md:max-w-xl  border-gray-700 bg-gray-200 ">
<img class=" h-20 m-2 w-auto rounded-r-lg" src='https://i.ibb.co/T2TS9hG/mastering-the-kitchen-572x764-1-550x680.jpg' alt=""/>
<div class="flex  justify-between leading-normal w-6/12">
   <div>
   <h5 class=" text-sm font-bold tracking-tight  text-gray-700 md:text-base">servieName</h5>
    <p class=" text-sm  text-gray-400">By <span>admin@gmail.com</span></p>
    
   </div>
   <div>
       <p className='text-gray-500 text-sm md:text-base'>price:</p>
       <p className='text-gray-500 text-sm md:text-base'>Supplier:</p>
   </div>
    <div  className='text-white flex items-center justify-center absolute inset-y-1/3 right-1 px-2 py-2.5 bg-gray-400 rounded-full text-xl'>
    
    <FaTrashAlt />
</div>
</div>
</div>

    </div>
    );
};

export default ManageCard;