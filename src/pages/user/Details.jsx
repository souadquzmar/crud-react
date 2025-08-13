import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../componoents/custom/useFetch';
import Loader from '../../componoents/loader/Loader';

export default function Details() {

    const {id} = useParams();
    const {data,error,isLoading} = useFetch(`users/${id}`);
    if(isLoading) return <Loader />;
    if(error) return <p className='text-danger'>{error.message}</p>;
  return (
    <div>
        <h2>Details</h2>
        <p>Name: {data.user.userName}</p>
        <p>Email: {data.user.email}</p>
        <p>Phone Number: {data.user.phone}</p>
    </div>
  )
}
