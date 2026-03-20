
import './App.css'
import nature from './assets/nature.jpg'
function App() {


  return (
   <div className='container'>
    <img src={nature} alt="nature"/>
    <img src="sky.jpg" alt="sky"/>
    <img src="https://images.pexels.com/photos/1632790/pexels-photo-1632790.jpeg?cs=srgb&dl=pexels-jplenio-1632790.jpg&fm=jpg" alt="tree" className='image'/>
   </div>
  )
}

export default App
