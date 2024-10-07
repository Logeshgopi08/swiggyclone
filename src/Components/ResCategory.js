import { useState } from "react";
import SpecificItem from "./SpecificItem";

const ResCategory =({data})=>{
        
    const {title,itemCards} =data;
    
    
    
    const [showItems,setShowItems] = useState(false);

    return (
        <div className="py-2 mx-4    ">
            <div className="bg-white py-5 px-3 rounded-lg ">
            <div className="flex justify-between  ">
                <h2 className="font-bold">{title}</h2>
                <button onClick={()=>setShowItems(!showItems)} >Show</button>
            </div >
            { showItems &&<div className="mt-5">
            {itemCards.map((item)=>{
                return <SpecificItem key={item?.card?.info?.id} data={item?.card?.info}/>
            })}
            </div>}
            </div>
        </div>
    );
}

export default ResCategory