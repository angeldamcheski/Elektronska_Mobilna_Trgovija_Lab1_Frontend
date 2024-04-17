import React from "react";
import { useState } from "react";
import { useEffect } from "react";
// import Author from "./Author";
import axios from "axios";
function Authors(props) {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/authors");
      setAuthors(response.data);
      console.log(response);
    } catch (error) {
      console.log("Error catching data " + error);
    }
  };

  // return (
  //   <div className="container">
  //     <div className="row">
  //       {authors.map((author, index) => (
  //         <Author
  //           name={author.name}
  //           surname={author.surname}
  //           originCountry={author.originCountry}
  //           key={index}
  //         ></Author>
  //       ))}
  //     </div>
  //   </div>
  // );
  return (
    <div className="container">
      <div className="row">
        {authors.map((author, index) => (
         <div key={index} className="col-sm-6 col-md-4 col-lg-3">
         <div className="card" style={{ marginBottom: "10px", marginTop: "20px" }}>
           <img
             src="https://www.color-hex.com/palettes/49839.png"
             className="card-img-top"
             alt="Book Cover"
             style={{ maxHeight: "50px", objectFit: "cover" }}
           />
           <div className="card-body">
             <h4 className="card-title">{author.name}</h4>
             <h6 className="card-text">{author.surname}</h6>
             <p className="card-text">{author.originCountry.name}</p>
           </div>
         </div>
       </div>
        ))}
      </div>
    </div>
  );
}

export default Authors;
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
