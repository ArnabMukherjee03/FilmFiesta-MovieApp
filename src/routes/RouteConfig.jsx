import {Routes, Route} from "react-router-dom";
import Home from "../views/home/Home";
import NotFound from "../views/NotFound";


const RouteConfig = ()=>{
    
    return <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="*" element={<NotFound/>} />
    </Routes>
}


export default RouteConfig;