import { DevTool } from '@hookform/devtools';
import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import { Slide, toast } from 'react-toastify';

export default function Create() {

  const { register, control, handleSubmit } = useForm();
  const navigate = useNavigate();
  const registerForm = async (data) => {
    try {
      const response = await axios.post(`https://node-react-10.onrender.com/users`, data);
      if (response.status === 201) {
        toast.success('user added successfully!', {
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

    }

  }
  return (
    <div className='container p-3'>
      <h3 className='pb-3 pt-3'>Add New User</h3>
      <form onSubmit={handleSubmit(registerForm)}>
        <div className="form-floating mb-3">
          <input {...register('userName')} type="text" className="form-control" id="userName" placeholder="name@example.com" />
          <label htmlFor="userName">User Name</label>
        </div>
        <div className="form-floating mb-3">
          <input {...register('email')} type="email" className="form-control" id="email" placeholder="name@example.com" />
          <label htmlFor="email">Email</label>
        </div>
        <div className="form-floating mb-3">
          <input {...register('password')} type="password" className="form-control" id="pass" placeholder="name@example.com" />
          <label htmlFor="pass">Password</label>
        </div>
        <div className="form-floating mb-3">
          <input {...register('phone')} type="text" className="form-control" id="phone" placeholder="name@example.com" />
          <label htmlFor="phone">Phone Number</label>
        </div>
        <button className='btn btn-primary' type='submit'>Add User</button>
      </form>
      <DevTool control={control} />
    </div>
  )
}
