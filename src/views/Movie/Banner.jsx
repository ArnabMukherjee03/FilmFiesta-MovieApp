import React, { useContext} from 'react'
import { tmdbImg } from '../../config/Conf'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useSelector} from "react-redux";
import { trailerContext } from '../../hooks/useTrailer';
import { selectTrailer } from '../../store/movieSlice';
import { FaCirclePlay } from "react-icons/fa6";

const Banner = ({movie}) => {
    const {setOpen,setIsTrailer,setTrailerKey} = useContext(trailerContext);
    const trailer = useSelector(selectTrailer);

    // console.log(trailer);

    const fetchTrailer = ()=>{
        setOpen(true);
    }

  return (
    <div className='relative h-[90vh] overflow-hidden'>
        <LazyLoadImage
          effect='blur'
          className="object-cover"
          src={`${tmdbImg}${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <div className="absolute top-0 left-0 w-[40%] bg-black bg-opacity-40 h-full flex flex-col gap-2 items-center justify-center">
            <p className="text-xl font-heading text-white opacity-100">{movie?.title}</p>
            <p className='w-[80%] text-center text-white font-para text-sm'>{movie?.overview}</p>
            <div onClick={fetchTrailer} className="bg-[#E95E55] text-white w-[100px] py-1 cursor-pointer mt-4 font-para text-center">Trailer</div>
        </div>
        <div className="absolute top-16 right-8 h-[80%] w-[20%] flex flex-col gap-4 p-8  no-scrollbar overflow-y-auto">
            
            {
                trailer?.map((trailer)=>{
                    return <div key={trailer?.id} className='relative w-full'>
                           
                           <FaCirclePlay onClick={()=>{setIsTrailer(true); setTrailerKey(trailer?.key); setOpen(true)}} className='absolute z-20 text-2xl cursor-pointer top-1/2 translate-x-[-50%] left-1/2 translate-y-[-50%]  text-white'/>
                           <LazyLoadImage effect='blur' className='w-full h-full' alt={trailer?.name} src={`https://img.youtube.com/vi/${trailer?.key}/maxresdefault.jpg`} />
                                                   
                        </div>
                })
            }
        </div>
    </div>
  )
}

export default Banner
