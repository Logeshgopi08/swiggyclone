import CartItem from "./CartItem";
import UserDetail from "./UserDetail";

const CartPage = ()=>{

    return (
        <div className="bg-gray-200 h-screen  ">

        
        <div className="mx-[7%]   bg-white">
            <div className="mt-10 flex">
               <div className="bg-red-400 w-1/2">
                <UserDetail/>
                </div> 
                <div className="bg-blue-500 w-1/2 ">
                   <CartItem/>
                </div>
            </div>
        </div>
        </div>
    );
}

export default CartPage;