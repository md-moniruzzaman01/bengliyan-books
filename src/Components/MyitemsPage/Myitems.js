import { async } from '@firebase/util';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../Firebase.init';
import { signOut } from 'firebase/auth';
import LoadingScreen from '../SharedPageSection/LoadingScreen';

const Myitems = () => {
    const [user, loading, error] = useAuthState(auth);
    const [myitems,setMyitems]=useState([])
    const navigate = useNavigate()
   
    useEffect(()=>{
       
        const getMyitems=async()=>{
            const email =await user.email;
          
            const url = `https://guarded-dusk-72997.herokuapp.com/myitem?email=${email}`
        try {
            const {data} = await axios.get(url,{
                headers:{
                    authorization:`bearer ${localStorage.getItem('accessToken')}`
                }
            })
            setMyitems(data)
        } catch (error) {
            console.log(error);
            if (error.response.status === 401 || error.response.status === 403 || error.response.status === 0) {
                signOut(auth);
                navigate('/login')
            }
        }
            
        }
        getMyitems();
    },[user])
    if(loading){
        return <LoadingScreen></LoadingScreen>
    }
    return (
        <div>
          my items: {myitems.length}
        </div>
    );
};

export default Myitems;