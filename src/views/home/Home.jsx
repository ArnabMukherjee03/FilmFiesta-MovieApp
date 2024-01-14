import React from "react";
import Banner from "./Banner";
import MovieList from "./MovieList";
import Trailer from "./Trailer";
import News from "./News";


const Home = () => {
  return (
    <>
      <Banner />
      <MovieList />
      <Trailer />
      <News/>
    </>
  );
};

export default Home;
