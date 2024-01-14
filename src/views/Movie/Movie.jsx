import React, { useEffect } from 'react'
import {useDispatch,useSelector} from "react-redux";
import { getTrailer, selectLoading, selectMovie, singlemovie } from '../../store/movieSlice';
import Banner from './Banner';
import { useParams } from "react-router-dom";
import Details from './Details';

const Movie = () => {
  const {id} = useParams();
  const dispatch = useDispatch();
  const movie = useSelector(selectMovie);
  const loading = useSelector(selectLoading);

  useEffect(()=>{
    dispatch(singlemovie(`/movie/${id}`))
    dispatch(getTrailer(`/movie/${id}/videos`));
  },[dispatch,id])

  console.log(movie);
  return (
    <>
       {
          loading?<><div className="fixed top-0 bg-white z-40 h-screen w-full flex justify-center  items-center">Loading...</div></>:<>
          <Banner movie={movie}/>
          <Details movie={movie}/>
          </>
       }
    </>
  )
}

export default Movie
