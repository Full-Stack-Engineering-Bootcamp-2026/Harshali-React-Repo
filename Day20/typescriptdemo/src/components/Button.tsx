import React, { useState } from 'react'

//function handleClick(e: React.MouseEvent<HTMLButtonElement>){
    //console.log(e.currentTarget)

//}
//const handleSubmit = (e:React.SubmitEvent<HTMLFormElement>) =>{
  // e.preventDefault
//}

const handleClick=(e: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
    console.log(e.currentTarget)
}






function Button() {

    const [name,setName]=useState("")
    const handleChange=(e: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
     console.log(setName(e.currentTarget.value));
}

  return (
    <div>
        <input type='text' value={name} onChange={()=>handleChange}/>
        <button onClick={()=>handleClick}>click</button>
      
    </div>
  )
}

export default Button
