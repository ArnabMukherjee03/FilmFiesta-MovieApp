import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import demoImg from "../../assets/Animal.jpg"
const Newscard = () => {
  return (
    <div className='flex gap-4'>
        <div className="w-[30%]">
            <LazyLoadImage src={demoImg} className='w-full h-full object-cover rounded-xl'/>
        </div>
        <div className="w-[70%]">
            <p className=' text-lg font-heading '>Karan Johar Explains Why He Thinks Animal Is 2023's Best Film</p>
            <p className='font-para'>Updated: January 2, 2024</p>
            <p className='font-para text-sm flex'>Share Trending on: </p>
        </div>
      
    </div>
  )
}

export default Newscard
