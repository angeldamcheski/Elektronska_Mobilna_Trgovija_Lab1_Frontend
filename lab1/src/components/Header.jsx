import React from "react";
import "bootstrap/dist/css/bootstrap.css";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Book Store
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/books">
                Books
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/categories">
                Categories
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/authors">
                Authors
              </a>
            </li>
          </ul>

          <a className="btn btn-outline-success" type="submit" href="/create">
            Add a Book
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Header;
