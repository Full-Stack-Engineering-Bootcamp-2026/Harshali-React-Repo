import BookShow from "./BookShow"

function BookList({books,onDelete}){

   const renderedList= books.map((book)=>{                     //array of obj to arr of components
        return <BookShow key={book.id}  onDelete={onDelete} book={book} />           ///why
    })

    return(
        <div className="book-list">
            {renderedList}
        </div>
    )
}
export default BookList