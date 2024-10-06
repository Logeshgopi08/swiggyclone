import { imageUrl } from "../utlis/constant";

const ImageCard = ({data})=>{
    //   console.log( data);
      
    return (
        <div className="w-56  px-1">
             <img className="h-full mx-20" alt="food-image" src={imageUrl+data}/>
        </div>
    );
}

export default ImageCard;