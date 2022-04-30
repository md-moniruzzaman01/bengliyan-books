import React, { useState } from 'react';
import logo from '../../Images/bookhouse-logo.svg'
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { MdSearch } from 'react-icons/md';
import NavBaritemData from './NavBaritemData'
import { Link } from 'react-router-dom';


const NavBarSection = () => {
  const [open, setOpen] = useState(false)
  const [search, setSearch] = useState(false)
  const navBarBtnHandle = () => setOpen(!open)
  return (
    <div className='shadow-md pb-2'>


<div className='container  mx-auto'>
      <div className='flex justify-between  w-full items-center px-5'>

        <div className='h-16'>
          <img className='h-full' src={logo} alt="" />
        </div>

        <div className='w-8/12 flex  justify-end'>

          <div onClick={navBarBtnHandle} className='block md:hidden'>
            {
              open ? <AiOutlineClose /> : <FaBars />
            }
          </div>

          <div className={`absolute left-0 h-full bg-white shadow-lg w-64 top-0  flex justify-center ${open ? 'left-0' : 'left-[-100%]'} md:static md:w-full md:shadow-none `}>

            <ul className='w-full block md:flex justify-end'>
              <p className='absolute top-[-5px] right-[-15px] p-2 text-xl rounded-full bg-gray-400 md:hidden' onClick={() => setOpen(false)}><AiOutlineClose /></p>
              <h1 className='text-xl my-3 text-center border-b mx-7 md:hidden'>menu</h1>

              {
                search ?
                  <div className='bg-white flex justify-between w-full h-9 md:w-full lg:w-8/12'>
                    <input className='bg-gray-100 px-7 rounded-l-md w-11/12' type="search" name="search" id="" placeholder='Search here....' />
                    <button className='flex  justify-center items-center px-0.5 bg-slate-200 rounded-r-md'><MdSearch />Search</button>
                  </div>
                  : NavBaritemData.map((item, index) => <li key={index} className='mx-auto w-3/6 py-1  flex items-center justify-center md:w-24  md:mx-1'> <Link to={item.path}>{item.title}</Link> </li>)
              }

              <button className='hidden md:block ml-3 text-xl' onClick={() => setSearch(!search)}>{search ? <AiOutlineClose /> : <MdSearch />}</button>
            </ul>

          </div>
        </div>
      </div>

      <div className='bg-white flex justify-between w-11/12 h-11 mx-auto  md:hidden  '>
        <input className='bg-gray-100 px-7 rounded-l-md w-11/12' type="search" name="search" id="" placeholder='Search here....' />
        <button className='flex  justify-center items-center px-0.5 bg-slate-200 rounded-r-md'><MdSearch />Search</button>
      </div>

    </div>



    </div>
  );
};

export default NavBarSection;