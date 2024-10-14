import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utlis/redux/slice/userSlice";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");
     const [emailId,setEmailId] = useState("");
     const[password,setPassword] = useState("");
     const[isLoginpage,setIsLoginPage] = useState(true);
     const dispatch = useDispatch();
     const navigate = useNavigate();
     
     const  handleLogin = async()=>{
       try {
         const res = await  axios.post("http://localhost:3500/login",{emailId,password},{withCredentials:true});
        
      dispatch(addUser(res?.data?.data))
       navigate('/home');
        
       } catch (error) {
          console.log(error);
          
       }

     }
     const handleSignUp = async () => {
        try {
          const res = await axios.post(
            "http://localhost:3500/signup",
            { firstName, lastName, emailId, password },
            { withCredentials: true }
          );
          dispatch(addUser(res.data.data));
          return navigate("/profile");
        } catch (err) {
          console.log("Something went wrong");
           
        }
      };

  return (
    <div className="flex justify-center  mt-10 ">
      <div className="shadow-lg py-2 w-[19rem]">
        <h1 className="my-2 mx-4 font-semibold text-lg text-orange-600">{isLoginpage?"Login":"SignUp"}</h1>
        <ul className="flex flex-col">
         {!isLoginpage &&(<> <input value={firstName} onChange={(e)=>setFirstName(e.target.value)}
            className="px-3 border border-orange-600 py-3 my-2 mx-4 rounded-lg border-1"
            placeholder="FirstName"
          />
          <input value={lastName} onChange={(e)=>setLastName(e.target.value)}
            className="px-3 border border-orange-600 py-3 my-2 mx-4 rounded-lg border-1"
            placeholder="LastName"
          /> </>)}
          <input onChange={(e)=>setEmailId(e.target.value)}
          value={emailId}
            className="px-3 border border-orange-600 py-3 my-2 mx-4 rounded-lg border-1 focus:border-orange-600 "
            placeholder="Email"
          />
          <input  onChange={(e)=>setPassword(e.target.value)} value={password}
            className="px-3 border border-orange-600 py-3 my-2 mx-4 rounded-lg border-1"
            placeholder="Password"
          />
          <p onClick={()=>{setIsLoginPage(!isLoginpage)}}
          className="my-1 mx-4 font-semibold text-sm text-orange-600 hover:underline">{isLoginpage?"New User? SignUp Here":"Already have a account? Login"}</p>
        </ul>
        <button onClick={()=>isLoginpage?handleLogin():handleSignUp()}
        className="bg-orange-500 px-3 py-2 rounded-lg  w-52 mx-10 my-3">{isLoginpage?"Login":"Register"}</button>

      </div>
    </div>
  );
};

export default LoginPage;
