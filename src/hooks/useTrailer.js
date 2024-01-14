import React, { createContext, useEffect, useState } from "react";
import { useSelector} from "react-redux";
import { selectTrailer } from "../store/movieSlice";
export const trailerContext = createContext();

const TrailerProvider = ({ children }) => {
  const [isOpen,setOpen] = useState(false);
  const [isTrailer,setIsTrailer] = useState(false);
  const [trailerKey,setTrailerKey] = useState("");
  const [trailerId,setTrailerId] = useState("");
  const trailer = useSelector(selectTrailer);

  useEffect(()=>{
    !isTrailer?setTrailerId(trailer.filter(items=> items?.type === "Trailer")):setTrailerId(trailerKey)
  },[trailer,isTrailer,trailerKey]);

  
  return (
    <trailerContext.Provider value={{trailerId,isOpen,setOpen,setIsTrailer,setTrailerKey}}>{children}</trailerContext.Provider>
  );
};

export default TrailerProvider;
