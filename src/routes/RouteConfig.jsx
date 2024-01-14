import {Routes, Route} from "react-router-dom";
import Home from "../views/home/Home";
import NotFound from "../views/NotFound";
import Movie from "../views/Movie/Movie";


const RouteConfig = ()=>{
    
    return <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/movies/:id" element={<Movie/>}/>
        <Route path="*" element={<NotFound/>} />
    </Routes>
}


export default RouteConfig;