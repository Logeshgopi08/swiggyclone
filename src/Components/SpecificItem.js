import { useDispatch } from "react-redux";
import { addItems } from "../utlis/redux/slice/cartSlice";

const SpecificItem = ({data})=>{
       
    const dispatch = useDispatch();
     const {name,price,ratings,description} = data;

     const {rating,ratingCountV2} = ratings?.aggregatedRating;

       const itemDetail = [name,price/100];
      const handleAddCart=()=>{
        dispatch(addItems(itemDetail));
        
      }

       
    return (
        <div className="my-3 bg-gray-100 h-48 rounded-lg py-2 px-1 ">
            <div className="flex justify-between">
                <div>
                    <ul className="px-2">
                        <h1 className="pt-4 font-semibold text-lg">{name}</h1>
                        <h3 className="text-lg">Rs.{price/100}</h3>
                        {ratings.aggregatedRating.length> 0 &&<p className="py-3 text-orange-400 font-medium">{rating} ({ratingCountV2}) </p>}
                        <p className="font-medium text-gray-950">{description}</p>
                    </ul>
                </div>
                <div className="h-">
                    <div className="h-48">
                        <img  className="h-44 w-56 rounded-lg"
                         alt="item-image" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,c_fit/ebcda29a62123bbf8bb8a33bbe2ab847"/>
                         <button onClick={handleAddCart}
                          className="bg-green-500 text-white -mt-8 mx-12 py-1 absolute px-6">Add+</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SpecificItem;