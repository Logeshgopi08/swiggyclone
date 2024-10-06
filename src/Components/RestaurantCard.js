// import { RES_IMAGE_URL } from "../utlis/constant";

import { RES_IMAGE_URL } from "../utlis/constant";

const RestaurantCard =({data})=>{
     
     
    
    const{areaName,avgRatingString, cloudinaryImageId,cuisines,sla,name} = data;
    return (
        <div className=" w-[15rem] bg-gray-100 mx-2 my-2 pb-3 rounded-lg"> 
            <div className="">
            <img  className="rounded-lg w-[15rem] h-44"
            alt="res-img" src={RES_IMAGE_URL+cloudinaryImageId}/>
            </div>
            <ul className="ml-3">
            <h2 className="text-xl font-semibold">{name}</h2>
            <p className="font-semibold">{avgRatingString} . {sla.slaString}</p>
            <p className="text-gray-500 font-semibold truncate ...">{cuisines.join(",")}</p>
            <p className="text-gray-500 font-semibold">{areaName}</p>
            </ul>
        </div>
    );
}

export default RestaurantCard;