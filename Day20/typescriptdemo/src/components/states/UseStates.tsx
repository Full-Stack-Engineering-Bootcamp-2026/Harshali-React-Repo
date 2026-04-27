import React, { useState } from 'react'

interface UserInputType{
    username: string
    password:string
}
const initialState:UserInputType=
{username:"",password:""}


function UseStates() {

const [user,setUser] = useState<UserInputType>(initialState)

const handleChange=(e: React.ChangeEvent<HTMLInputElement>)=>{

    const {name,value} =e.target
    setUser({
        ...user,
        [name]:value
    })
}
  return (

    <div>
       <h3>username</h3>
       <input type='text' 
       name='username'
       value={user.username}
       onChange={handleChange}/>


       <h3>password</h3>
       <input type='text'
       name='password'
       value={user.password}
       onChange={handleChange}/>
    </div>
  )
}

export default UseStates
