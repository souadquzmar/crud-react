import React, { useEffect, useState } from 'react'
import Loader from '../../componoents/loader/Loader';
import axios from 'axios';

export default function Index() {

    const [users,setUsers] = useState([]);
      const [error,setError] = useState(null);
      const [isLoading,setIsLoading] = useState(true);
    
      const getUsers = async () =>{
        try{
          const response =  await axios.get(`${import.meta.env.VITE_BURL}/users`);
          setUsers(response.data.users);
        }catch(err){
          setError(err);
        } finally{
          setIsLoading(false);
        }
      }
      useEffect(() =>{
        getUsers();
      },[])

      if(isLoading) return <Loader />;
      if(error) return <p className='text-danger'>{error.message}</p> 
  return (
    <>
    {
        users.map(user =>
            <div className='user' key={user._id}>
                <h2>{user.userName}</h2>
            </div>
        )
    }
    </>
  )
}
