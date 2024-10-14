import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./slice/cartSlice";
import UserReducer from "./slice/userSlice";

const appStore =configureStore({
    reducer:{
       cart:CartReducer,
       user:UserReducer
    }
});

export default appStore;