
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Blog from './Blog';
import '../Style/blogStyle.css'




const Blogs = () => {
    const [blogs ,setBlogs]=useState([])
    const navigate = useNavigate()
    useEffect(()=>{
        
      fetch('https://guarded-dusk-72997.herokuapp.com/blogs')
      .then(res=> res.json())
      .then(data=>{
        setBlogs(data)
          
      })
     
    },[])
const Detailsbtn =(id)=>{
        navigate(`/blogs/${id}`)
}
console.log(blogs);

    return (
      <div className=''>
            <div className='blog-section container mx-auto'>
         <div>
         {
             blogs.map(blg=> <Blog Detailsbtn={Detailsbtn} key={blg._id} blg={blg}></Blog>)
         }
         </div>
        
       <div className='mt-5'>
       <div className='category w-full  md:w-10/12  bg-gray-100 min-h-[90vh]  text-gray-800 mx-auto rounded   '>
            <h1 className='text-gray-800 text-2xl border-b-2 border-gray-400'>Category</h1>
           {
               blogs.map(bgheader =>  <p className='mt-5 border-b-small py-2'> <a href={`#${bgheader._id}`}>{bgheader.name}</a>  </p>
               )
           }
        </div>
       </div>
        </div>
        </div>
      
    );
};

export default Blogs;