import { createSlice } from "@reduxjs/toolkit";


export let counterSlice=createSlice(
    {
        name:"counter",
        initialState:{
            count: 0                       //global data 
        },
        reducers:{
            //state is old state
            //reqdara payload
            increment:(state,reqData)=>{          //increment  is action
                state.count+=1
            },
            decrement:(state,reqData)=>{
                state.count-=1
            }
        }
    }
)
export const {increment,decrement}=counterSlice.actions
export default counterSlice.reducer