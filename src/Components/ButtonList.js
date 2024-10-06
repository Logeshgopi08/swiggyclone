import Button from "./Button";

const ButtonList =()=>{
 
    const buttonList =["Filter","Faster","New on Swiggy","SortBy","Ratings 4.0+","pure veg","offers","Rs.300-400","Less than 300"]; 
    return (
        <div className="flex overflow-x-scroll no-scrollbar ">
            <div className="flex">
            {buttonList.map((l)=>{
                return <Button key={l} data={l}/>
            })}
            </div>
        </div>
    );
}

export default ButtonList;