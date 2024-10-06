import { useEffect, useState } from "react";
import ImageCard from "./ImageCard";
import { info } from "../utlis/constant";
import RestaurantCard from "./RestaurantCard";

const FirstContainer = () => {
    const[topres,setTopRes] = useState([]);
    
   const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0843007&lng=80.2704622&"
    );
    const json = await data.json();
   // console.log(json);
    const restop = json.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setTopRes(restop);
   // console.log(topres);
    
  };

  useEffect(() => {
    fetchData();
  }, []);

  if(!topres) return null;
  return (
    <div className="shadow-lg">
    <div className="mt-6 ">
      <h1 className="text-2xl font-bold ml-10 ">What's on your Mind? </h1>
      <div>
        <div className="h-40 flex  overflow-x-scroll no-scrollbar mt-3">
          {info.map((obj) => {
            return <ImageCard key={obj.id} data={obj.imageId} />;
          })}
        </div>
      </div>
      <div className="mt-6">
        <h1 className="text-2xl font-bold ml-10">
          Top restaurant chains in Chennai
        </h1>
          <div className="flex overflow-x-scroll no-scrollbar">
          <div className="flex" >
           {topres.length>0 && topres.map((res)=>{
            return <RestaurantCard key={res.info.id} data= {res.info}/>
           })}
          </div>
          </div>
      </div>
    </div>
    </div>
  );
};

export default FirstContainer;



