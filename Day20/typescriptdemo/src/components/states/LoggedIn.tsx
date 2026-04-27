import React from 'react'
import { useState } from 'react'

type AuthUser={
    name: string
    email:string
}
function LoggedIn() {

    const [isLoggedIn,setIsLoggedIn] =useState(false)

    const handleLogin=()=>{
        setIsLoggedIn(true)
    }

    const handleLogout=()=>{
        setIsLoggedIn(false)

    }

  return (
    <div>
       <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>
        <div>User name is </div>
         <div>User email is </div>
    </div>
  )
}

export default LoggedIn
