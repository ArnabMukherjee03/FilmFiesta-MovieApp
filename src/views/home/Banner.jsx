import { useEffect } from "react";
import { Carousel } from "../../components";
import { fetchData, selectData, selectLoader } from "../../store/movieSlice";
import { useDispatch, useSelector } from "react-redux";


const Banner = () => {
  const dispatch = useDispatch();
  const data = useSelector(selectData);
  const loader = useSelector(selectLoader);


  
  useEffect(() => {
    dispatch(fetchData("/movie/now_playing"));
  },[dispatch]);
   
  return !loader?<Carousel data={[...data.slice(0, 5)]} />:<div className="fixed top-0 bg-white z-40 h-screen w-full flex justify-center  items-center">
  loading...
</div>;
};

export default Banner;
