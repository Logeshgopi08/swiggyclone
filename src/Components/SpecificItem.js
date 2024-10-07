
const SpecificItem = ({data})=>{
    // console.log(data);
    const {name,price,ratings,description} = data?.card?.info;

    const {rating,ratingCountV2} = ratings?.aggregatedRating;

    
    return (
        <div className="my-3 bg-gray-200 h-48 rounded-lg py-2 px-1 ">
            <div className="flex justify-between">
                <div>
                    <ul>
                        <h1>{name}</h1>
                        <h3>Rs.{price/100}</h3>
                        <p>{rating} ({ratingCountV2})</p>
                        <p>{description}</p>
                    </ul>
                </div>
                <div className="h-">
                    <div className="h-48">
                        <img  className="h-44 w-56 rounded-lg"
                         alt="item-image" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,c_fit/ebcda29a62123bbf8bb8a33bbe2ab847"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SpecificItem;