import { useEffect, useState } from "react";
import { AutoLayout, Slider } from "../../components/index"
import { useSelector, useDispatch } from "react-redux";
import { getTrailer,selectLoading, selectTrailer, selectupcoming, upcomeingMovies, } from "../../store/movieSlice";
import ModalVideo from 'react-modal-video';

const Trailer = () => {
  const dispatch = useDispatch();
  const [isOpen,setOpen] = useState(false);
  const [trailerId,setTrailerId] = useState("");
  useEffect(()=>{
    dispatch(upcomeingMovies("/movie/upcoming"))
  },[dispatch])

  const data = useSelector(selectupcoming);
  const loader = useSelector(selectLoading);
  const trailer = useSelector(selectTrailer);

  useEffect(()=>{
    setTrailerId(trailer.filter(items=> items?.type === "Trailer"))
  },[trailer]);


  
  const fetchTrailer = (id)=>{
      dispatch(getTrailer(`/movie/${id}/videos`));
      setOpen(true);
  }

  return (
    <>
    <ModalVideo
				channel="youtube"
				isOpen={isOpen}
				videoId={trailerId[0]?.key}
				onClose={() => {setOpen(false);
          setTrailerId('');
        }} 
			/>
    <AutoLayout className="mt-[30px] lg:mt-[60px]">
        <p className="font-heading text-xl lg:text-xl lg:leading-[26px] text-[#E95E55]">
          Latest Trailer
        </p>
      </AutoLayout>
      <Slider
        getTrailer = {fetchTrailer}
        status={loader}
        data={data}
        isPlayer={true}
        items={5}
        className="mt-[30px] lg:mt-[60px] lg:px-[20px]"
      ></Slider>
      </>
  )
}

export default Trailer
