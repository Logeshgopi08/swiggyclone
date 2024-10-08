import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = ()=>{
    
    const cartStore = useSelector((store)=>store?.cart?.cartItems);

    return (
        <div className=" flex items-center justify-between px-3 shadow-xl">
            <div className="h-16 flex items-center px-3 ">
                <img className="h-full" alt="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvSINLFIk_aYYafATc5SFvrMom7b2baIrRkw&s"/>
                <h1 className="text-xl font-bold text-gray-400 hover:text-orange-600">Swiggy</h1>
            </div>
            <div>
                <ul className="flex">
                   <Link to={"/home"}> <li className="text-lg text-gray-400 mx-3 px-3 font-semibold hover:text-orange-600">Home</li> </Link>
                    <li className="text-lg text-gray-400 mx-3 px-3 font-semibold hover:text-orange-600">Offers</li>
                    <li className="text-lg text-gray-400 mx-3 px-3 font-semibold hover:text-orange-600">Help</li>
                    <Link to={"/cart"}><li className="text-lg text-gray-400 mx-3 px-3 font-semibold hover:text-orange-600">Cart ({cartStore.length})</li></Link>
                    <li className="text-lg text-gray-400 mx-3 px-3 font-semibold hover:text-orange-600">SignIn</li>
                </ul>
            </div>
        </div>
    );
}

export default Header;