import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
function BookCreate() {
  const [authors, setAuthors] = useState([]);
  const CategoriesList = {
    NOVEL: "Novel",
    THRILLER: "Thriller",
    HISTORY: "History",
    FANTASY: "Fantasy",
    BIOGRAPHY: "Biography",
    CLASSICS: "Classics",
    DRAMA: "Drama",
  };

  const categoryKeys = Object.keys(CategoriesList);
  const [bookData, setBookData] = useState({
    name: "",
    category: "",
    authorId: "",
    availableCopies: 0,
  });

  useEffect(() => {
    fetchAuthors();
  }, []);
  const fetchAuthors = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/authors`);
      setAuthors(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/books/create",
        bookData
      );
      console.log("Book created successfully");
      setBookData({
        name: "",
        category: "",
        authorId: "",
        availableCopies: 0,
      });
    } catch (error) {}
  };
  return (
    <div className="container">
      <h2>Create a new Book</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={bookData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="category">Category:</label>
          <select
            className="form-control"
            id="category"
            name="category"
            value={bookData.category}
            onChange={handleChange}
            required
          >
            <option value="">Select Category</option>
            {categoryKeys.map((category) => (
              <option key={category.id} value={category.id}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="authorId">Author:</label>
          <select
            className="form-control"
            id="authorId"
            name="authorId"
            value={bookData.authorId}
            onChange={handleChange}
            required
          >
            <option value="">Select Author</option>
            {authors.map((author) => (
              <option key={author.id} value={author.id}>
                {author.name} {author.surname}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="availableCopies">Available Copies:</label>
          <input
            type="number"
            className="form-control"
            id="availableCopies"
            name="availableCopies"
            value={bookData.availableCopies}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Create Book
        </button>
      </form>
    </div>
  );
}

export default BookCreate;
