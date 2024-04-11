import React from "react";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import Books from "./components/Books";
import Categories from "./components/Categories";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/books" element={<Books />}></Route>
        <Route path="/categories" element={<Categories />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
