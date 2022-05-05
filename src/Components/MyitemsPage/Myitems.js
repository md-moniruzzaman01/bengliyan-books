import { async } from '@firebase/util';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';

const Myitems = () => {
    const [user, loading, error] = useAuthState(auth);
    const [myitems,setMyitems]=useState([])
    useEffect(()=>{
        const getMyitems=async()=>{
            const email = user.email;
            const url = `http://localhost:5000/myitem?email=${email}`
            const {data} = await axios.get(url)
            setMyitems(data)
        }
        getMyitems();
    },[user])
    return (
        <div>
          my items: {myitems.length}
        </div>
    );
};

export default Myitems;