import axios from "axios";
import React from "react";
import { useState } from "react";
function Book(props) {
  const [isEditing, setIsEditing] = useState(false);

  const [editBook, setEditBook] = useState({
    name: props.name,
    category: props.category,
    authorId: props.author.id,
    availableCopies: props.availableCopies,
  });

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditBook((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    axios
      .put(`http://localhost:8080/api/books/${props.id}/edit`, editBook)
      .then((response) => {
        console.log("Book updates successfully: ", response.data);
        props.onUpdateBook(response.data);
      })
      .catch((error) => {
        console.log("Error updating book: ", error);
      });
    setIsEditing(false);
  };
  const handleDelete = () => {
    axios
      .delete(`http://localhost:8080/api/books/${props.id}/delete`)
      .then((response) => {
        console.log("Book deleted successfully: ", response.data);
      })
      .catch((error) => {
        console.log("Error updating book: ", error);
      });
  };

  const handleTake = () => {
    axios.post(`http://localhost:8080/api/books/${props.id}/take`);
  };

  return (
    <div className="col-sm-6 col-md-4 col-lg-3">
      <div className="card" style={{ marginBottom: "10px", marginTop: "20px" }}>
        <img
          src="https://www.color-hex.com/palettes/49839.png"
          className="card-img-top"
          alt="Book Cover"
          style={{ maxHeight: "50px", objectFit: "cover" }}
        />
        <div className="card-body">
          {isEditing ? (
            <div>
              <input
                className="form-control"
                type="text"
                name="name"
                value={editBook.name}
                onChange={handleChange}
              />
              <input
                className="form-control"
                type="text"
                name="category"
                value={editBook.category}
                onChange={handleChange}
              />
              <input
                className="form-control"
                type="text"
                name="availableCopies"
                value={editBook.availableCopies}
                onChange={handleChange}
              />
              <button className="btn btn-primary" onClick={handleSubmit}>
                Save
              </button>
            </div>
          ) : (
            <>
              <h4 className="card-title">{props.name}</h4>
              <h6 className="card-text">{props.category}</h6>
              <p className="card-text">
                {props.author.name} {props.author.surname}
              </p>
              <p className="card-text">
                Available copies: {props.availableCopies}
              </p>
              <a className="btn btn-primary" onClick={handleEdit}>
                Edit
              </a>
              <a className="btn btn-danger " onClick={handleDelete}>
                Delete
              </a>
              <a className="btn btn-success " onClick={handleTake}>
                Take
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Book;
