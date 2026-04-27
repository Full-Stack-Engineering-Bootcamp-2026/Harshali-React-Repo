import { createSlice } from "@reduxjs/toolkit";


export let cartSlice=createSlice(
    {
        name:"cart",
        initialState:{
            cart:[]
        },
        reducers:{
            //state is old state
            //reqdara payload
            addToCart:(state,action)=>{
                console.log("Added",action.payload)
                let item=state.cart.find(obj=>obj.id === action.payload.id)
                if(item){
                    item.qty +=1
                }
                else{
                    state.cart.push({...action.payload,qty:1})
                }
            },
            deleteCart:(state,action)=>{
                state.cart=state.cart.filter(
                    item=>item.id!==action.payload
                )
            },
            changeQty:(state,action)=>{
                let item=state.cart.find(item=>item.id===action.payload.id)
                if(item){
                    item.qty=action.payload.qty
                }
            }
        }
    }
)
export const {addToCart,deleteCart,changeQty}=cartSlice.actions
export default cartSlice.reducer