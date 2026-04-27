import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "./features/counterSlice"


function App() {

 const count=useSelector((state)=>state.counter.value)
 const dispatch=useDispatch()

  function handleIncrementClick(){
      dispatch(increment())
  }
  function handleDecrementClick(){
      dispatch(decrement())
  }
  

  return (
    <div className="container">
      <button onClick={handleIncrementClick}>+</button>
      <p>Count: {count}</p>
      <button onClick={handleDecrementClick}>-</button>
    </div>
  )
}

export default App
