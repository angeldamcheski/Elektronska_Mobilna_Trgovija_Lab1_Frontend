import React, { useState } from "react";

function Categories() {
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
  console.log(categoryKeys);
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">All categories</th>
        </tr>
      </thead>
      <tbody>
        {categoryKeys.map((category, index)=>(
          <tr key={index}>
          <td>{category}</td>
        </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Categories;
