import { useEffect, useState } from "react"
import BookCreate from "../components/BookCreate"
import BookList from "../components/BookList"
import axios from 'axios'

function App() {
  
  const [books,setBooks] =useState([])

  const fetchBooks = async()=>{
     const response= await axios.get('http://localhost:3001/books')
     setBooks(response.data)
  }

  useEffect(()=>{
    fetchBooks()
  },[])


  const createBook=async(title)=>{

   const response=await axios.post('http://localhost:3001/books',
    {
      title
    })
     const updatedBooks=[...books,response.data]
    //   {
    //   id: Date.now(),
    //     title
    //  }]
     setBooks(updatedBooks)
     }


const deleteBookById=async(id)=>{

    await axios.delete(`http://localhost:3001/books/${id}`)
     const updatedBooks=books.filter((book)=>{return  book.id!==id}
      )
      setBooks(updatedBooks)
}

const editBookById=async(id,newTitle)=>{

 const response= await axios.put(`http://localhost:3001/books/${id}`,{
    title:newTitle
  })
  console.log(response)

  const updatedBooks=books.map((book)=>{
    if(book.id ===id){
      return {...book,...response.data}
    }
    return book
  })
  setBooks(updatedBooks)
}

  return (
    <div>
      <h1>Reading List</h1>
      <BookCreate onCreate={createBook} />
      <BookList books={books} onDelete={deleteBookById} onEdit={editBookById}/>
    </div>
  )
}

export default App
