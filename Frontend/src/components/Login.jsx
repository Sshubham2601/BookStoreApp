import React from 'react'
import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"
function Login() {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  return (
    <div className=''>
      <dialog id="my_modal_3" className="modal-box bg-white">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 ">✕</button>
          </form>
          <h3 className="font-bold text-lg">Login</h3>
          <div className='mt-6 space-y-2'>
            <span>Email</span>
            <br />
            <input type="email" placeholder='Enter your email' className='w-80 px-3 py-1 border rounded-md outline-none'  {...register("email", { required: true })} />
            {errors.email && <span>This field is required</span>}

          </div>
          <div className='mt-6 space-y-2'>
            <span>Password</span>
            <br />
            <input type="password" placeholder='Enter your password' className='w-80 px-3 py-1 border rounded-md outline-none'  {...register("password", { required: true })} />
            {errors.password && <span>This field is required</span>}

          </div>
          <div className='mt-4 flex justify-around '>
            <button className='bg-pink-500 border-none rounded-md py-1 text-white px-3 hover:bg-pink-700 duration-200 cursor-pointer'>Login</button>
            <p>Not registered?
              <Link to='/signup' className='underline text-blue-500 cursor-pointer'>
                Signup
              </Link>
            </p>
          </div>
        </div>
      </dialog>
    </div>
  )
}

export default Login

// onSubmit={handleSubmit(onSubmit)} 
