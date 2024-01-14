import { useContext } from "react";
import VideoModal from "./components/Modal/VideoModal";
import { Navbar } from "./components/index";
import RouteConfig from "./routes/RouteConfig";
import { trailerContext } from "./hooks/useTrailer";


function App() {
  const {isOpen,trailerId,setOpen} = useContext(trailerContext)
  return (
    <>
      <VideoModal
       videoId={trailerId[0]?.key} 
       showModal={isOpen} 
			 closeModal={()=>{setOpen(!isOpen)}}
       autoPlay={true}
			/>
      <Navbar/>
      <RouteConfig />
    </>
  );
}

export default App;
