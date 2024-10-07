import { useEffect, useState } from "react";
import DetailContainer from "./DetailContainer";
import { useParams } from "react-router-dom";

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
    console.log(resDetail);

      
    
    


    return (
        <div className="mt-20 mx-[16%]  ">
         { resDetail && <DetailContainer data={resDetail}/>}
            
        </div>
    );
}

export default ItemPage;