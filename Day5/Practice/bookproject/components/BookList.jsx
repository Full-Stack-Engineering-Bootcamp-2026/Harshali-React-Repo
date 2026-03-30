import { useContext } from "react"
import BooksContext from "../src/context/books"
import BookShow from "./BookShow"

function BookList({books,onDelete,onEdit}){

const {count,incrementCount}=useContext(BooksContext)

   const renderedList= books.map((book)=>{                     //array of obj to arr of components
        return <BookShow onEdit={onEdit} key={book.id}  onDelete={onDelete} book={book} />           ///why
    })

    return(
        <div className="book-list">
            {count}
            <button onClick={incrementCount}>Click</button>
            {renderedList}
        </div>
    )
}
export default BookList