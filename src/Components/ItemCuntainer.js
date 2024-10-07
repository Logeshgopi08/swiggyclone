import ResCategory from "./ResCategory";

const ItemContainer = ({data})=>{
    // console.log(data.card);
    
   
    // console.log(itemCards);
    
    

    
    return (
        <div className="mt-[5%] bg-gray-400">
            <h1 className="text-2xl font-bold px-3 py-2">Menu Category</h1>
            <ResCategory data={data?.card}/>
        </div>
    );
}

export default ItemContainer;