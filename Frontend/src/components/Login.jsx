import React from 'react'
import { Link, useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import axios from 'axios';
import toast from 'react-hot-toast';
import { useAuth } from '../context/AuthProvider';

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [authUser,setAuthUser] = useAuth() 

const navigate = useNavigate()
  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
   await axios.post("http://localhost:8001/user/login",userInfo)
   .then((res)=>{
     if(res?.data?.message ){
      toast.success(res?.data?.message);


      if(res?.data?.user){
      setAuthUser(res?.data?.user)
        localStorage.setItem("Users",JSON.stringify(res?.data?.user))
        navigate("/course")
      }
    }
   }).catch((err)=>{
    if(err.response){
      console.log("Error:",err?.response?.data?.message)
      toast.error(err?.response?.data?.message);     
    }
   });
  };
  return (
    <div className=''>
      <dialog id="my_modal_3" className="modal-box  border-2xl  w-[600px] h-[350px] text-black dark:text-white bg-white dark:bg-slate-800 border border-2xl">
        {/* <div className="modal-box border border-2xl"> */}
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            {/* <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 ">✕</button> */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </Link>
          </form>
          <h3 className="font-bold text-lg">Login</h3>
          <div className='mt-6 space-y-2'>
          <span>Email</span>
                <br />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-80 px-3 py-1 border rounded-md outline-none  bg-white dark:bg-slate-900"
                  {...register("email", { required: true })}
                />
                <br />
                {errors.email && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}

          </div>
          <div className='mt-6 space-y-2'>
            <span>Password</span>
            <br />
            <input type="password" placeholder='Enter your password' className='w-80 px-3 py-1 border rounded-md outline-none  bg-white dark:bg-slate-900'  {...register("password", { required: true })} />
            <br/>{errors.password && 
             <span className="text-sm text-red-500">This field is required</span>}

          </div>
          <div className='mt-4 flex justify-around '>
            <button className='bg-pink-500 border-none rounded-md py-1 text-white px-3 hover:bg-pink-700 duration-200 cursor-pointer' onClick={handleSubmit(onSubmit)}>Login</button>
            <p>Not registered?{" "}
            <Link to='/signup' className='underline text-blue-500 cursor-pointer'>
        Signup
      </Link>
             
            </p>
          </div>
        {/* </div> */}
      </dialog>
    </div>
  )
  }

export default Login;


