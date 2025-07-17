import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
//import list from "../../public/list.json";
import Cards from './Cards';
import axios from "axios"
import { useState,useEffect } from 'react';

function Freebook() {
    const[book,setBook]= useState([])
useEffect(()=>{
  const getBook=async()=>{
    try {
      const res = await axios.get("https://mindshelf-mlds.onrender.com/book")
      const data = res.data.filter((data)=>data.category==="Free")
      console.log(data)
      setBook (data);
    } catch (error) {
      console.log(error)
    }
  }
  getBook();
})
    //const filterData= list.filter((data)=>data.category==="Free");
   // console.log(filterData);
      var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
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
}
  return (
   <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 '>
       <div className=' w-1/2'><h1 className='font-semibold text-3xl pb-2 text-red-500 underline decoration-black'>Browse For Free
       </h1>
       <p className='text-xl'>Experience the joy of reading without spending a single penny!<br/> Our "Browse for Free" section is curated for the curious mind — rich in content,
         light on your wallet.<br/><br/> </p>
       </div>
   
    <div>
          <Slider {...settings}>
        {book.map((item)=>(
          <Cards item={item} key={item.id}/>
        ))}
      </Slider>
    </div>
     </div>
    </>
  )
}

export default Freebook