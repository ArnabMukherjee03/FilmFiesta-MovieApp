import React, { createContext, useEffect, useState } from "react";
import { useSelector} from "react-redux";
import { selectTrailer } from "../store/movieSlice";
export const trailerContext = createContext();

const TrailerProvider = ({ children }) => {
  const [isOpen,setOpen] = useState(false);
  const [trailerId,setTrailerId] = useState("");
  const trailer = useSelector(selectTrailer);

  useEffect(()=>{
    setTrailerId(trailer.filter(items=> items?.type === "Trailer"))
  },[trailer]);

  return (
    <trailerContext.Provider value={{trailerId,isOpen,setOpen}}>{children}</trailerContext.Provider>
  );
};

export default TrailerProvider;
