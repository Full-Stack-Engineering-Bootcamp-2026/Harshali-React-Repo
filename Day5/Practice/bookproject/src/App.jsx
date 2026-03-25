import { useState } from "react"
import BookCreate from "../components/BookCreate"
import BookList from "../components/BookList"


function App() {
  
  const [books,setBooks] =useState([])

  const createBook=(title)=>{
     const updatedBooks=[...books,
      {
        id:Math.round(Math.random()*9999),
        title
     }]
     setBooks(updatedBooks)
  }
const deleteBookById=(id)=>{
     const updatedBooks=books.filter((book)=>{return  book.id!==id}
      )
      setBooks(updatedBooks)
}

  return (
    <div>
      <BookCreate onCreate={createBook} />
      <BookList books={books} onDelete={deleteBookById}/>
    </div>
  )
}

export default App
