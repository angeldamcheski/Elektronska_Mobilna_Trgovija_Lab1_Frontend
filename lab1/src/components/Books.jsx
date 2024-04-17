import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Book from "./Book";
import axios from "axios";
function Books(props) {
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };
  useEffect(() => {
    fetchData();
  }, []);
  
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/books");
      setBooks(response.data);
      console.log(response);
    } catch (error) {
      console.log("Error catching data " + error);
    }
  };
  const filteredBooks = books.filter((book)=>book.name.toLowerCase().includes(searchQuery.toLowerCase()))
// function handleUpdateBook(updatedBook){
//   setBooks((prevBooks)=> prevBooks.map((book) => (book.id === updatedBook.id ? updatedBook : book)))
// }
  return (
    <div className="container">
      <input
    className="form-control"
    type="text"
    placeholder="Search books..."
    value={searchQuery}
    onChange={handleSearchChange}
  />
      <div className="row">
        {filteredBooks.map((book, index) => (
          <Book
            id={book.id}
            name={book.name}
            author={book.author}
            category={book.category}
            availableCopies={book.availableCopies}
            key={index}
            // onUpdateBook={handleUpdateBook}
          ></Book>
        ))}
      </div>
    </div>
  );
}

export default Books;
{
  /* <div className="col-sm-6 col-md-4 col-lg-3">
          <div
            className="card"
            style={{ marginBottom: "10px", marginTop: "20px" }}
          >
            <img src="book1.jpg" className="card-img-top" alt="Book Cover" />
            <div className="card-body">
              <h5 className="card-title">Book Title</h5>
              <p className="card-text">Author Name</p>
            </div>
          </div>
</div> */
}
