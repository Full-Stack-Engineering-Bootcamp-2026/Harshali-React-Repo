import React from 'react'

type Greetprops={
    name:string  //key name and type
    messageCount:number
    isLoggedIn: boolean
}

function Greet(props:Greetprops) {
  return (
    <div>
      <h2>
            {
                props.isLoggedIn ?
                'Welcome ${props.name} you have ${props.messageCount}' : 'Welcome Guest'
            }

      </h2>
      console.log("Greet loaded")
    </div>
  )
}

export default Greet
