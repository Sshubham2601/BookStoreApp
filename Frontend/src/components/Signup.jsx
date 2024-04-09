import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';

function Signup() {
  const [showModal, setShowModal] = useState(false);

  const handleLoginClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className='flex items-center justify-center h-screen'>
        <div id="my_modal_3" className={`modal-box bg-white ${showModal ? 'show' : ''}`}>
          <div className="modal-box">
            <form method="dialog">
              {/* Close button */}
              <button onClick={handleCloseModal} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 ">✕</button>
            </form>
            <h3 className="font-bold text-lg dark:bg-slate-900 dark:text-white">SignUp</h3>
            <div className='mt-6 space-y-2'>
              <span>Name</span>
              <br />
              <input type="text" placeholder='Enter your name' className='w-80 px-4 py-1 border rounded-md outline-none' />
            </div>
            <div className='mt-6 space-y-2'>
              <span>Email</span>
              <br />
              <input type="email" placeholder='Enter your email' className='w-80 px-4 py-1 border rounded-md outline-none' />
            </div>
            <div className='mt-6 space-y-2'>
              <span>Password</span>
              <br />
              <input type="password" placeholder='Enter your password' className='w-80 px-4 py-1 border rounded-md outline-none' />
            </div>
            <div className='mt-4 flex justify-around '>
              <button className='bg-pink-500 border-none rounded-md py-1 text-white px-4 hover:bg-pink-700 duration-200 cursor-pointer'>Signup</button>
              <p>Have account?
                <button className='underline text-blue-500 cursor-pointer' onClick={handleLoginClick}>Login</button>
              </p>
            </div>
          </div>
        </div>
      </div>
      {showModal && <Login />}
    </>
  )
}

export default Signup;
