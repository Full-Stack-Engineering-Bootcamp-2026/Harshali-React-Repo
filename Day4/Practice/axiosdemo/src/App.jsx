import { useState } from 'react';
import searchImages from './api/Api'
import './App.css'
import SearchBar from './components/SearchBar';
import SearchBar1 from './components/SearchBar1';
import ImageList from './components/ImageList';
function App() {

  const [images,setImages]=useState([])


//pass search term
const handleSubmit= async(term)=>{
 const result=await searchImages(term)
 setImages(result)
}

  return (
    <div>
     
     

    <SearchBar1 onSubmit={handleSubmit}/>

    <ImageList images={images}/>
    </div>
  )
}

export default App
