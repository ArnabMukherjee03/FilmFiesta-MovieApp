import React from 'react'
import AutoLayout from '../../components/AutoLayout';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { tmdbImg } from '../../config/Conf';

const Details = ({movie}) => {
  return (
    <AutoLayout className='lg:px-[200px]'>
       <div className="flex gap-4">
           <div className="w-1/2 p-8 flex justify-center items-center">
              <LazyLoadImage
                 effect='blur'
                  width="300px"
                 src={`${tmdbImg}${movie?.poster_path}`}
                 alt={movie?.title}
              />
           </div>
           <div className="w-1/2 pt-8 flex flex-col gap-2">
              <p className='text-xl font-heading'>{movie?.title}</p>
              <p className='font-para'>{movie?.tagline}</p>
              <p className='font-para'>{movie?.status} <span className='text-red-500'>{movie?.release_date}</span></p>
              <p className='font-para'>Revenue: {movie?.revenue}</p>
              <p className='font-para'>Budget: {movie?.budget}</p>
              <p className='font-para'>Directed By: {movie?.credits.crew.filter((crew)=> crew.job==="Director").map(dir=>{return<span>{dir?.name} </span>})}</p>
              {/* <p>{Math.floor(movie.vote_average * 10)}%</p>c */}
           </div>
       </div>
    </AutoLayout>
  )
}

export default Details;
