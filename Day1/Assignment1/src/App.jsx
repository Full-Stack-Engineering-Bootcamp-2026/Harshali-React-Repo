

import './App.css'

function App() {
  
const name="Harshali Patil"
const batch="Fullstack Bootcamp"



  return (
    <div className='container'>
      <h1 style={{color:"blue"}}>Student Information</h1>
      <p> Name: {name} </p>
      <p>Batch: {batch}</p>
      <p>Date and Time: {new Date().toLocaleString()}</p>
      <ul>
        <li>ReactJS</li>
        <li>NodeJS</li>
        <li>PostgreSQL</li>
      </ul>
    </div>
  )
}

export default App