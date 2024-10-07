import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./slice/cartSlice";

const appStore =configureStore({
    reducer:{
       cart:CartReducer
    }
});

export default appStore;