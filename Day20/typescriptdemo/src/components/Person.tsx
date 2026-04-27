import React from 'react'

type PersonProps ={
    name:{
        first:string
        last:string
    }

}


function Person(props:PersonProps) {
  return (
    <div>
      <div>{props.name.first}</div>
      <div>{props.name.last}</div>
    </div>
  )
}

export default Person
