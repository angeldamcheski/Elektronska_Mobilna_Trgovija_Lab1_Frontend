import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import Books from "./components/Books";
import Categories from "./components/Categories";
import BookCreate from "./components/BookCreate";
import Authors from "./components/Authors";
import axios from "axios";
function App() {
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
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Books allbooks={books}/>}></Route>
        <Route path="/books" element={<Books allbooks={books}/>}></Route>
        <Route path="/categories" element={<Categories />}></Route>
        <Route path="/authors" element={<Authors />}></Route>
        <Route path="/create" element={<BookCreate />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
