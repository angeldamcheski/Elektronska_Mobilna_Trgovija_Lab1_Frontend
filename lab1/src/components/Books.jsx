import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Book from "./Book";
import axios from "axios";
function Books(props) {
  const [books, setBooks] = useState([]);

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

  return (
    <div className="container">
      <div className="row">
        {books.map((book, index) => (
          <Book
            name={book.name}
            author={book.author.name}
            category={book.category}
            availableCopies={book.availableCopies}
            key={index}
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
