import React, { useEffect, useState } from 'react'
import Cards from './Cards';
// import list from '../../public/list.json'
import {Link} from "react-router-dom";
import axios from "axios";
function Course() {
  const[book,setBook]=useState([])

  useEffect(()=>{
    const getBook=async()=>{
      try{
        const res=await axios.get("http://localhost:8001/book");
        console.log(res.data);
        setBook(res.data);
      }catch(error){
          console.log(error);
      }
    }
    getBook();
  },[]);
  return (
    <>
     <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 pt-12  '>
          <div className='mt-20 items-center justify-center text-center '>
          <h1 className='text-2xl md:text-4xl  font-extrabold'>We're delighted to have you <span className='text-4xl text-pink-500'>Here!:)</span></h1>
          <p className='text-base font-medium  mt-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci nam temporibus itaque facilis amet beatae obcaecati iste eos quasi, ab, qui veniam laborum reiciendis. Facere, error! Eligendi doloribus porro laboriosam iusto eius, velit molestias possimus quas quos est nesciunt soluta quam nisi quia sint accusantium dolores voluptas saepe ipsam quibusdam minus! Ipsam assumenda earum quis, commodi quia, tempora ut quibusdam deleniti repellendus animi magni provident, odit ipsa. Ad, exercitationem esse.</p>
         <Link to="/">
         <button className='mt-8 text-white border-none px-4 py-3 font-semibold rounded-md bg-pink-500 hover:bg-pink-700 duration-200 cursor-pointer outline-none'>Back</button>
         </Link>

          </div>
          <div className='mt-10 grid grid-cols-1 md:grid-cols-4'>
                    {
                     book.map((item)=>(
                              <Cards key={item.id} item={item}/>
                     ))
                    }
          </div>
     </div>
    </>
  )
}

export default Course
