import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import ButtonList from "./ButtonList";

const SecondContainer = () => {
    const [reslist,setResList] = useState([]);
    const fetchResData = async () => {
        const data = await fetch(
          "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=13.0843007&lng=80.2704622&carousel=true&third_party_vendor=1"
        );
        const json = await data.json();
       console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
       const ResList = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setResList(ResList);
        
      };
    
      useEffect(() => {
        fetchResData();
      }, []);

      
  return (
    <div>
      <div className="mt-6">
        <h1 className="text-2xl font-bold ml-10">Restaurant near me</h1>
        <div>
            <ButtonList/>
        </div>
        <div className="flex flex-wrap">
            <div className="flex  flex-wrap">
              {reslist.length>0 && reslist.map((res)=>{
                return <RestaurantCard key={res.info.id} data={res.info}/>
              })}
            </div>
        </div>
      </div>
    </div>
  );
};

export default SecondContainer;
