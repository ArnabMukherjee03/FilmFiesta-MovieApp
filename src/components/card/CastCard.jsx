import React from 'react'
import { tmdbImg } from '../../config/Conf';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { NavLink } from 'react-router-dom';

const CastCard = ({data, className=""}) => {
  return (
    <div>
       <div
      className={`flex  flex-col gap-1 pb-2 lg:gap-2 transition-transform duration-300 transform hover:scale-105 ${className}`}
    >  
      <LazyLoadImage
        effect="blur"
        className="w-full relative"
        src={`${tmdbImg}${data?.profile_path}`}
        alt={data?.title}
      />
      <p className="w-full font-heading text-[8px] lg:text-base lg:leading-[26px]">
        <NavLink to={`/people/${data?.cast_id}`}>{data?.name}</NavLink>
      </p>
      <p className="font-para text-[8px] lg:text-sm text-gray-500">
       {data?.character}
      </p>
    </div>
    </div>
  )
}

export default CastCard
