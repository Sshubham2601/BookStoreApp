import React from 'react'
import { useAuth } from '../context/AuthProvider'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
          const [authUser,setAuthUser] =useAuth();
          const navigate = useNavigate()
          const handleLogout=()=>{
                    try{
                              setAuthUser(null);
                              localStorage.removeItem("Users");
                              navigate('/')

                              setTimeout(()=>{
                                toast.success("Logout successfully");
                              },1000)
                              // window.location.reload();

                    }catch(error){
                              toast.error("Error: " + error.message);
                              // setTimeout(()=>{},2000);
                    }
          };
  return (
    <div>
      <button className='px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer' onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Logout
