import { useEffect } from "react";
import BookCreate from "./components/BookCreate.js";
import BookList from "./components/BookList.js"
import './index.css';
import useBookContext from "./hooks/use-books-context.js";

function App() {
const { fetchBooks } = useBookContext();

  useEffect(() => {
    fetchBooks()
  },[]);

  return(
    <div className="app">
      <h1>Reading List</h1>
      <BookList />
      <BookCreate />
    </div>
  )
}

export default App;