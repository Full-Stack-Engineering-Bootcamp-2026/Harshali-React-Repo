import { useState } from "react"
import BookEdit from "./BookEdit"

function BookShow({book,onDelete}){
const [showEdit,setShowEdit] =useState(false)

const handleDeleteClick=()=>{
    onDelete(book.id)
}
const handleEditClick=()=>{
    setShowEdit(!showEdit)          //why
}
let content=<h3>{book.title}</h3>
if(showEdit){
    content=<BookEdit book={book}/>
}

    return(
        <div className="book-show">
               <div>{content}</div>

                <div className="actions">
                    <button onClick={handleEditClick} className="edit">Edit</button>
                    <button onClick={handleDeleteClick} className="delete">delete</button>
                </div>
        </div>
    )
}
export default BookShow