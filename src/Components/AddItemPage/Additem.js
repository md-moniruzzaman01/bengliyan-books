import React from 'react';
import addimage from '../../Images/undraw_New_entries_re_cffr.png'
import { GiSnail } from 'react-icons/gi';

const Additem = () => {
    return (
        <div>
            <div className='flex justify-center items-center '>
                <h1 className=' text-3xl mt-7 mb-2 px-4 my-2.5 rounded font-semibold bg-black text-white'>Add Product</h1></div>
            <p className='flex justify-center text-md items-center italic'><GiSnail/> turbo fast....</p>
            <div className='grid grid-cols-1 container mx-auto px-2  md:grid-cols-2'>
            <div className='' >
                <img className='w-full  ' src={addimage} alt="" />
            </div>
            <div className='mb-20 '>
            <form className='  bg-white p-2 border-2  rounded w-10/12 mx-auto mt-5'>
                <div className='my-2  flex justify-between items-center'>
                    <label className='text-gray-600' htmlFor="name">Title :</label>
                    <input name='name' className='focus:outline-none focus:border-b border-gray-400 w-11/12  h-9 px-3 bg-gray-100 rounded' type="text" placeholder='Prodact heading....'/>
                </div>
                <div className='my-2  flex justify-between items-center'>
                    <label className='text-gray-600' htmlFor="image">Image:</label>
                    <input name='image' className='focus:outline-none focus:border-b border-gray-400 w-11/12 h-9 px-3 bg-gray-100 rounded' type="text" placeholder='Prodact heading....'/>
                </div>
               
               <div className='grid grid-cols-2'>
               <div className='my-2  flex justify-between items-center'>
                    <label className='text-gray-600' htmlFor="price">price:</label>
                    <input name='price' className='focus:outline-none focus:border-b border-gray-400 w-10/12 h-9 px-3 bg-gray-100 rounded'type="number" placeholder='Prodact heading....'/>
                </div>
               <div className='my-2 ml-1  flex justify-between items-center'>
                    <label className='text-gray-600' htmlFor="quantity">quantity:</label>
                    <input name='quantity' className='focus:outline-none focus:border-b border-gray-400 w-full h-9 px-3 bg-gray-100 rounded' type="number" placeholder='Prodact heading....'/>
                    
                </div>
               </div>
               <div className='my-2  flex  items-center'>
                    <label className='text-gray-600'  htmlFor="supplier">supplier:</label>
                    <input name='supplier' className='focus:outline-none focus:border-b border-gray-400 w-full  h-9 px-3 bg-gray-100 rounded' type="text" placeholder='Prodact heading....'/>
                </div>
                <div className='my-2  '>
                    <label className='text-gray-600' htmlFor="discribtion">Discribtion:</label>
                   <textarea className='focus:outline-none focus:border-b border-gray-400 w-full p-3 bg-gray-100 rounded' placeholder='Discribtion.....' name="discribtion" id="" cols="30" rows="5"></textarea>
                </div>
                <div className='flex justify-end'>
                    <input className='px-5 py-1 text-xl font-semibold bg-[#f18e7d] rounded text-white ' type="submit" value="Submit" />
                </div>
            </form>
            </div>
            
        </div>
        </div>
    );
};

export default Additem;