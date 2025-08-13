import React, { useEffect, useState } from 'react'
import Loader from '../../componoents/loader/Loader';
import axios from 'axios';
import useFetch from '../../componoents/custom/useFetch';

export default function Index() {

    const {data,error,isLoading} = useFetch('users');
      if(isLoading) return <Loader />;
      if(error) return <p className='text-danger'>{error.message}</p> 
  return (
    <>
    {
        data.users.map(user =>
            <div className='user' key={user._id}>
                <h2>{user.userName}</h2>
            </div>
        )
    }
    </>
  )
}
