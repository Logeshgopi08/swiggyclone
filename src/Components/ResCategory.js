import { useState } from "react";
import SpecificItem from "./SpecificItem";

const ResCategory =({data})=>{
       
        
     const {title,itemCards} =data?.card;
    
    const [showItems,setShowItems] = useState(false);

    return (
        <div className="py-2 mx-4    ">
            <div className="bg-white py-5 px-3 rounded-lg ">
            <div className="flex justify-between  ">
                <h2 className="font-bold">{title}</h2>
                <button onClick={()=>setShowItems(!showItems)} >Show</button>
            </div >
            { showItems &&<div className="mt-5">
            <SpecificItem data={itemCards[0]}/>
            </div>}
            </div>
        </div>
    );
}

export default ResCategory