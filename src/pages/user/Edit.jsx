import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useFetch from '../../componoents/custom/useFetch';
import Loader from '../../componoents/loader/Loader';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { DevTool } from '@hookform/devtools';
import { Slide, toast } from 'react-toastify';

export default function Edit() {

    const { id } = useParams();
    const { data, isLoading, error } = useFetch(`users/${id}`);

    const { register, control,handleSubmit } = useForm();

    const navigate = useNavigate();
    const registerForm = async (data) => {
        try {
            const response = await axios.put(`https://node-react-10.onrender.com/users/${id}`, data);
            console.log(response);
            if (response.status === 200) {
                toast.success('user edited successfully!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Slide,
                });
                navigate('/users');
            }
        } catch (err) {
            toast.error(err.message, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Slide,
                });
        }
    }

    if (isLoading) return <Loader />;
    if (error) return <p className='text-danger'>{error.message}</p>;
    return (
        <div className='container p-3'>
            <h3 className='pt-3 pb-3'>Edit User</h3>
            <form onSubmit={handleSubmit(registerForm)}>
                <div className="form-floating mb-3">
                    <input {...register('userName')} type="text" className="form-control" id="userName" placeholder="name@example.com" defaultValue={data.user.userName} />
                    <label htmlFor="userName">User Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="email" placeholder="name@example.com" value={data.user.email} disabled />
                    <label htmlFor="email">Email address</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="password" className="form-control" id="pass" placeholder="name@example.com" value={data.user.password} disabled />
                    <label htmlFor="pass">Password</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="phone" placeholder="name@example.com" value={data.user.phone} disabled />
                    <label htmlFor="phone">Phone Number</label>
                </div>
                <button className='btn btn-primary' type='submit'>Edit User</button>
            </form>
             <DevTool control={control} />
        </div>
    )
}
