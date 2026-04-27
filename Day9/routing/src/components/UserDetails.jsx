import React from 'react'
import { useParams } from 'react-router-dom'
const UserDetails = () => {
 // const params=useParams()
  //const userId=params.userId

  const {userId} =useParams()
  return (
    <div>
      <p>user details: {userId}</p>
    </div>
  )
}

export default UserDetails
