import { configureStore } from "@reduxjs/toolkit";
import  counterSlice  from "./counterSlice";
import  cartSlice  from "../cartSlice";  //why

export let store=configureStore(
    {
        reducer:{
            counterStore:counterSlice,
            cartStore:cartSlice
        }
    }
)