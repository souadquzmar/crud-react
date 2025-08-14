import React, { useEffect, useState } from 'react'
import Loader from '../../componoents/loader/Loader';
import axios from 'axios';
import useFetch from '../../componoents/custom/useFetch';
import { Link } from 'react-router-dom';

export default function Index() {

    const { data, error, isLoading, setData } = useFetch('users');
    if (isLoading) return <Loader />;
    if (error) return <p className='text-danger'>{error.message}</p>

    const removeUser = async (id) => {
        const response = await axios.delete(`https://node-react-10.onrender.com/users/${id}`);
        const newUsers = data.users.filter(user => {
            return user._id != id;
        });
        const newData = {
            message: 'Users fetched successfully',
            users: newUsers
        };
        setData(newData);
    }
    return (
        <>
            <table className='table'>
                <thead>
                    <tr>
                        <td>id</td>
                        <td>User Name</td>
                        <td>Email</td>
                        <td>Phone Number</td>
                        <td>Action</td>
                    </tr>
                </thead>

                <tbody>
                    {
                        data.users.map(user =>
                            <tr key={user._id}>
                                <td>{user._id}</td>
                                <td>{user.userName}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>
                                    <Link to={`/details/${user._id}`} className='btn btn-info me-2 text-white'>Details</Link>
                                    <Link to={`/edit/${user._id}`} className='btn btn-primary me-2 text-white'>Edit</Link>
                                    <button className='btn btn-danger' onClick={() => removeUser(user._id)}>Delete</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </>
    )
}
