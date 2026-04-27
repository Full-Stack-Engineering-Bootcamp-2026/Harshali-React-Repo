import { useReducer } from "react";
import React from 'react'

const initialState=0
const reducer=(state,action)=>{
    switch(action){
        case "increment":
            return state+1
        case "decrement":
            return state-1
        case "reset":
            return initialState
        default:
            return state
    }
}

function Counter() {

 const [count,dispatch] = useReducer(reducer,initialState)
  return (
    <div>
        <h2>Count: {count}</h2>
      <button onClick={()=>dispatch("increment")}> Increment</button>
       <button onClick={()=>dispatch("decrement")}>Decrement</button>
        <button onClick={()=>dispatch("reset")}>REset</button>
    </div>
  )
}

export default Counter
