import { useState } from "react";
import BookEdit from "./BookEdit.js";
import useBookContext from "../hooks/use-books-context.js";

function BookShow({book}) {
  
  const [showEdit, setShowEdit] = useState(false);
  const { deleteBookById } = useBookContext();

  const handleDeleteClick = () => {
    deleteBookById(book.id)
  }

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  }

  const handleSubmit = () => {
    setShowEdit(false);
  }

  let content = <h3>{book.title}</h3>;
  if (showEdit) {
    content = <BookEdit book={book} onSubmit={handleSubmit} />;
  }

  return(
    <div className="book-show">
      <img alt="book" src={`https://placehold.co/600x400@2x.webp?text=${book.title}`} />
      {content}
      <div className="actions">
      <button className="edit" onClick={handleEditClick}>
          Edit
        </button>
        <button className="delete" onClick={handleDeleteClick}>
          Deletes
        </button>
      </div>
    </div>
  )
}

export default BookShow;