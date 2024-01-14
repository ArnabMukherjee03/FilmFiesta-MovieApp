import { useContext, useEffect } from "react";
import { AutoLayout, Slider } from "../../components/index"
import { useSelector, useDispatch } from "react-redux";
import { getTrailer,selectStatusUpcoming,  selectupcoming, upcomeingMovies, } from "../../store/movieSlice";
import { trailerContext } from "../../hooks/useTrailer";


const Trailer = () => {
  const {setOpen} = useContext(trailerContext);
  const dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch(upcomeingMovies("/movie/upcoming"))
  },[dispatch])

  const data = useSelector(selectupcoming);
  const loader = useSelector(selectStatusUpcoming);


  const fetchTrailer = (id)=>{
      dispatch(getTrailer(`/movie/${id}/videos`));
      setOpen(true);
  }

  return (
    <>
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
