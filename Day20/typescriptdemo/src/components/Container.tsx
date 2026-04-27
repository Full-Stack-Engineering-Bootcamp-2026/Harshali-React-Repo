import React from 'react'

type ContainerProps={
    styles: React.CSSProperties

}


function Container(props:ContainerProps) {
  return (
    <div style={{border: '1px solid black',padding:'1rem'}}>
      Text content
    </div>
  )
}

export default Container
