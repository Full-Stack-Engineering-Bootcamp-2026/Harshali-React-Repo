import React from 'react'

type PersonListProps={
    names: {         //arr of obj
        first: string
        last: string
    }[]
}
function PersonList(props:PersonListProps) {
  return (
    <div>
      {props.names.map(name=>{
            return(
                <div>
                    <h1 key={name.first}>
                         <h2>{name.first}</h2>
                         <h2>{name.last}</h2>
                    </h1>
                   
                </div>
                
            )
      })
      }
    </div>
  )
}

export default PersonList
