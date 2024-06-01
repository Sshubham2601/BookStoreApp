import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
// import list from "../../public/list.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
function Freebook() {
  const[book,setBook]=useState([])

  useEffect(()=>{
    const getBook=async()=>{
      try{
        const res=await axios.get("http://localhost:8001/book");
        
        const data=res.data.filter((data)=>data.category==="Free");
        console.log(data);
        setBook(data);
      }catch(error){
          console.log(error);
      }
    }
    getBook();
  },[]);
          // const filterData=list.filter((data)=>data.category==="Free");
          // console.log(filterData);
          var settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 2,
            initialSlide: 0,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  initialSlide: 2
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
          };
  return (
    <>
    <div className=''>
    <div className='max-w-screen-2xl container mx-auto  md:px-20 px-4 '>
    <div>
          <h2 className='font-extrabold text-xl mb-3'>Free Offered Courses</h2>
          <p className='text-base font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error beatae fugiat repellat id fugit iusto autem. Exercitationem, vitae expedita ipsa recusandae porro repudiandae dolorem, quaerat sint tempora asperiores unde itaque magni nobis, placeat sequi. Qui.</p>
          </div>
          <div>
          <Slider {...settings}>
         {book.map((item)=>(
          <Cards item={item} key={item.id}/>
        ) )}
      </Slider>
          </div>
    </div>
    </div>
    </>
  )


























  
}

export default Freebook
