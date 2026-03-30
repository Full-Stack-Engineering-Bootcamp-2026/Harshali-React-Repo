import { useState } from "react"
import BookEdit from "./BookEdit"

function BookShow({book,onDelete,onEdit}){
const [showEdit,setShowEdit] =useState(false)

const handleDeleteClick=()=>{
    onDelete(book.id)
}
const handleEditClick=()=>{
    setShowEdit(!showEdit)          //why
}

const handleSubmit=(id,newTitle)=>{
    setShowEdit(false)
    onEdit(id,newTitle)

}

let content=<h3>{book.title}</h3>
if(showEdit){
    content=<BookEdit onSubmit={handleSubmit} key={book.id} 
     book={book}/>
}

    return(
        <div className="book-show">
            <img alt="books"
    src={`https://picsum.photos/seed/${book.id}/abcde300/200`}/>
               <div>{content}</div>
                <div className="actions">
                    <button onClick={handleEditClick} className="edit">Edit</button>
                    <button onClick={handleDeleteClick} className="delete">delete</button>
                </div>
        </div>
    )
}
export default BookShow