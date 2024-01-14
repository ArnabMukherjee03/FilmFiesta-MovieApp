import { useEffect, useState } from "react";
import { AutoLayout, Slider } from "../../components/index";
import { useSelector, useDispatch } from "react-redux";
import { allMovies, getMovies, selectLoading } from "../../store/movieSlice";

const values = [
  {
    id: 1235,
    name: "Popular",
    value: "/popular",
  },
  {
    id: 1236,
    name: "Trending",
    value: "/now_playing",
  },
  {
    id: 1237,
    name: "Top Rated",
    value: "/top_rated",
  },
  {
    id: 1234,
    name: "Upcoming",
    value: "/upcoming",
  },
];



const MovieList = () => {
  const dispatch = useDispatch();
  const [params, setParams] = useState("/popular");
  const movies = useSelector(allMovies);
  const loading = useSelector(selectLoading);
  
  useEffect(() => {
    dispatch(getMovies(`/movie${params}`));
  }, [dispatch, params]);

 
  return (
    <>
      <AutoLayout className="mt-[40px]  lg:mt-[90px]">
        <div className="flex justify-center  items-center  h-[40px]">
          <div className="flex justify-between gap-2 lg:gap-5">
            {values?.map((val) => {
              return (
                <p
                  onClick={() => setParams(val?.value)}
                  key={val?.id}
                  style={{ color: params === val?.value ? "#E95E55" : null }}
                  className="font-heading text-sm lg:text-[20px] cursor-pointer"
                >
                  {val?.name}
                </p>
              );
            })}
          </div>
        </div>
      </AutoLayout>
      <Slider
        data={movies}
        status={loading}
        items={4}
        className="mt-[40px] lg:mt-[90px]"
      />
    </>
  );
};

export default MovieList;
