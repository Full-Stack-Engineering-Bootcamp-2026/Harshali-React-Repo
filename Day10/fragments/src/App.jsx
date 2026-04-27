
import { useRef } from 'react'
import './App.css'
import FragmentDemo from './components/FragmentDemo'
import ParentComp from './components/ParentComp'
import PureComp from './components/PureComp'
import Tables from './components/Tables'
import { useState } from 'react'
import { useEffect } from 'react'
function App() {
  const [count,setCount]=useState(0)

let val=useRef(0)

let btnRef=useRef()

function handleIncrement(){
  val.current=val.current+1
  console.log('value:',val.current)
  setCount(count+1)
}

useEffect(()=>{
  console.log('rerenderd')
})

function changeColor(){
btnRef.current.style.backgroundColor="red"
}
  return (
    <div>
     <button 
     ref={btnRef}
     onClick={handleIncrement}>
      Increment
     </button>

    <button onClick={changeColor}>
      Change color of first button
    </button>

     <div>
      Count: {count}
     </div>
    </div>
  )
}

export default App
