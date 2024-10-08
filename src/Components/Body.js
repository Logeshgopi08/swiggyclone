import { Outlet } from "react-router-dom";
import Header from "./Header";
// import Home from "./Home";


const Body =()=>{
    return (
        <div>
            <Header/>
           <Outlet/>
        </div>
    );
}

export default Body;