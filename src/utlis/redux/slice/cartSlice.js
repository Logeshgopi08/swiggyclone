import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        cartItems:[]
    },
    reducers:{
        addItems:(state,action)=>{
            state.cartItems.push(action.payload);
        },
        removeItem:(state,action)=>{
            state.cartItems.pop();
        }
    }
});

export const {addItems,removeItem} = cartSlice.actions;

export default cartSlice.reducer;