import React from 'react';
import logincaracter from '../../Images/5186395-ai (2).svg'
import plantlogin from '../../Images/5186395-ai (3).svg'
import '../Style/login.css'
import { FaGoogle } from 'react-icons/fa';

const LoginPage = () => {
    return (
       <div className='container mx-auto'>
            <div className='login-section flex justify-center items-center pt-5  relative' >
                <div className=' w-3/12 h-[70vh] bg-green-200 '>
                    <h1 className='text-center text-3xl mt-11 mb-9 text-gray-700 font-semibold'>Welcome back</h1>
                    <p className=' ml-9 font-semibold text-md text-gray-800'>Please login to your account</p>
                  <div className='flex justify-center items-center mt-5' >
                  <div className='w-10/12'>
                      <label className='text-base pt-2 text-gray-700'  htmlFor="email">Email address:</label>
                      
                   <input className='block  w-full h-9 rounded bg-gray-100'  type="email" name="email" id="" />
                   <label  className='text-base pt-2 text-gray-700' htmlFor="password">Password :</label>
                    <input  className='block  w-full h-9 rounded bg-gray-100' type="password" name="password" id="" />
                   
                    <button className=' mt-5 w-full bg-green-400 py-1 text-white text-2xl rounded'>Login</button>
                    <div className='flex justify-end mt-2 text-gray-700'><p>Forget password?</p></div>
                   </div>
                  </div>
                    <div className='flex w-10/12 mx-auto items-center '>
                        <div className='w-full  border-b border-gray-700'></div>
                        <p className='px-5'>Or</p>
                        <div className='w-full  border-b  border-gray-700'></div>
                    </div>
                    <div className='w-10/12 mt-3 mx-auto flex border rounded border-green-900 items-center justify-center'>
                        <p className='flex items-center py-1 text-xl text-gray-900'> <FaGoogle/> <span className='pl-2'>Sign in with google</span> </p>
                    </div>
                    <div className='w-10/12 mx-auto mt-2'>
                    <p>Don't have an account?<span className='text-blue-400 pl-0.5 underline'>create account</span></p>
                    </div>
                    




                </div>

                <div className='absolute bottom-20 left-96'>
                    <img className='w-full h-60 ' src={logincaracter } alt="" />
                </div>
                <div className='absolute bottom-20  right-[18%] w-3/12'>
                    <img className='w-full ' src={plantlogin} alt="" />
                </div>

          </div>
       </div>
    );
};

export default LoginPage;