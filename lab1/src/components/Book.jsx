import React from "react";

function Book(props) {
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
          <h4 className="card-title">{props.name}</h4>
          <h6 className="card-text">{props.category}</h6>
          <p className="card-text">{props.author}</p>
          <p className="card-text">Available copies: {props.availableCopies}</p>
          <a className="btn btn-primary" >
            Edit
          </a>
          <a className="btn btn-danger ">Delete</a>
          <a className="btn btn-success ">Take</a>
        </div>
      </div>
    </div>
  );
}

export default Book;
