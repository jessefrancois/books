import { useState } from "react";
import useBookContext from "../hooks/use-books-context.js";

function BookEdit({book, onSubmit}) {
  const [title, setTitle] = useState(book.title);
  const {editBookById} = useBookContext();

  const handleChange = (event) => {
    setTitle(event.target.value);
  }

 const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit()
    editBookById(book.id, title);
  }

  return(
    <form onSubmit={handleSubmit} className="book-edit">
      <label>Title</label>
      <input className="input" onChange={handleChange} value={title} />
      <button className="button is-primary">Save</button>
    </form>
  )
}

export default BookEdit;