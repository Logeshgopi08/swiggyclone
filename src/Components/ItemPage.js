import { useEffect, useState } from "react";
import DetailContainer from "./DetailContainer";
import { useParams } from "react-router-dom";
import ItemContainer from "./ItemCuntainer";

const ItemPage = ()=>{
        
    const {resId} = useParams();
    const[resMenuData,setResMenuData] = useState(null);

    const fetchMenuData = async()=>{
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.0843007&lng=80.2704622&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER");

        const json = await data.json();
        // console.log(json.data);
        setResMenuData(json.data);
        
    }

    useEffect(()=>{
        fetchMenuData();
    },[]);

    if(resMenuData===null) return null;

    const resDetail = resMenuData?.cards[2]?.card?.card?.info;
     
    const resCategory = resMenuData?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>
       c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"  
    );

    
    console.log(resCategory);
    
    


    return (
        <div className="mt-20 mx-[16%]  h-screen ">
         { resDetail && <DetailContainer data={resDetail}/>}
         <div className="mt-[5%] bg-gray-200">
         <h1 className="text-2xl font-bold px-3 py-4  ">Menu Category</h1>
         { resCategory.length >0 && <div className="py-5">
         { resCategory.map((res)=>{
            return <ItemContainer key={res?.card?.card.title} data={res?.card?.card}/>
         })}
         </div>}
         </div>
        </div>
    );
}

export default ItemPage;