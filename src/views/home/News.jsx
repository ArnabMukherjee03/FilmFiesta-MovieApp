import React from 'react'
import { AutoLayout } from '../../components/index'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import demoImg from "../../assets/Animal.jpg"
import Newscard from '../../components/card/Newscard'

const News = () => {
  return (
    <AutoLayout className="mt-[40px] lg:my-10">
        <div className="flex itemscenter justify-center">
            <p className='font-heading text-[20px] text-[#E95E55]'>Top News</p>
        </div>
        <div className="mt-10 flex gap-8">
            <div className="w-1/2 relative">
                <LazyLoadImage className='w-full  rounded-xl z-10 ' src={demoImg}/>
                <div className="w-[90%] bg-white p-4 absolute top-48 right-[-20px] rounded-lg">
                <p className=' text-lg font-heading '>Karan Johar Explains Why He Thinks Animal Is 2023's Best Film</p>
                <p className='font-para text-sm'>Updated: January 2, 2024</p>
                <p className='font-para leading-4 text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's .....</p>
                </div>
                <div className="absolute bottom-[-20px] cursor-pointer w-[80px] lg:w-[120px] bg-[#E95E55] h-[38px] text-white mt-5 flex font-para items-center justify-center">
                    See More
                </div>
            </div>
            <div className="w-1/2 flex flex-col gap-6">
                   {
                     Array(3).fill(0).map((_,index)=>{
                        return <Newscard key={index}/>
                     })
                   }
            </div>
        </div>
    </AutoLayout>
  )
}

export default News
