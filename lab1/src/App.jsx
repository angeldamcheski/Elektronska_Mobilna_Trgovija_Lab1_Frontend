import React from "react";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import Books from "./components/Books";
import Categories from "./components/Categories";
import BookCreate from "./components/BookCreate";
import Authors from "./components/Authors";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Books/>}></Route>
        <Route path="/books" element={<Books />}></Route>
        <Route path="/categories" element={<Categories />}></Route>
        <Route path="/authors" element={<Authors />}></Route>
        <Route path="/create" element={<BookCreate />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
