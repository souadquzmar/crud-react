import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function useFetch(path) {
  const [data,setData] = useState([]);
      const [error,setError] = useState(null);
      const [isLoading,setIsLoading] = useState(true);
    
      const getData = async () =>{
        try{
          const response =  await axios.get(`${import.meta.env.VITE_BURL}/${path}`);
          setData(response.data);
        }catch(err){
          setError(err);
        } finally{
          setIsLoading(false);
        }
      }
      useEffect(() =>{
        getData();
      },[]);

      return {data,error,isLoading};
}
