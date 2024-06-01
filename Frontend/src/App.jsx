import React from 'react'
import Home from './Home/Home'
// import Course from './components/Course'
import {Navigate, Route,Routes} from "react-router-dom"
import Courses from './Courses/Courses'
import Signup from './components/Signup'
// import Contact from './components/Contact'
import Login from './components/Login'
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider'
import Contacts from './Contacts/Contacts'
function App() {
  const [authUser,setAuthUser] = useAuth() 
  console.log(authUser);
  
  return (
    <>
       <div className='bg-white text-black dark:bg-slate-900 dark:text-white'> 
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/course" element={authUser?<Courses/>:<Navigate to="/"/> } />
          <Route path="/signup" element={<Signup/>}/>
          <Route path='/contact' element={<Contacts/>}/>
          {/* <Route path='/login' element={ authUser?<Login/>:<Navigate to="/"/>}/> */}
        </Routes>
        <Toaster />
        </div>
        </>
  )
}

export default App
