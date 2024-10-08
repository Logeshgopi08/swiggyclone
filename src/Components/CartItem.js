import { useSelector } from "react-redux";

const CartItem = ()=>{
     
    const cartStore = useSelector((store)=>store?.cart?.cartItems);

    console.log(cartStore);
    
  if(!cartStore) return null;
    return (
        <div className="mx-7 bg-white my-2 py-2">
            <div className="px-2">
                <div className="flex">
                    <img  className="h-15 w-14"
                     alt="res-image" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_100,h_100,c_fill/RX_THUMBNAIL/IMAGES/VENDOR/2024/5/9/39a65ace-1068-4823-86bf-887991751e2a_242424.JPG"/>
                     <div className="mx-4">
                        <h1>Paradise Briyani</h1>
                        <p>Egmore</p>
                     </div>
                </div>
                <div className="bg-gray-200 py-2 my-1">
                    {cartStore.map((item)=>{
                        return <div key={item.id}
                         className="flex justify-between items-center bg-white py-5 px-2 my-2 mx-1 rounded-lg">
                        <h3>{item?.name}</h3>
                        <div className="border border-black">
                            <ul className="flex justify-between px-3 ">
                                <li className="mx-2">-</li>
                                <li className="mx-2" >2</li>
                                <li className="mx-2">+</li>
                            </ul>
                        </div>
                        <h3> Rs: {item?.price/100}</h3>
                    </div>
                    })}
                </div>
                <div>
                    <div className="flex justify-between my-2">
                        <h1>To Pay</h1>
                        <h2>Rs.4000</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartItem;