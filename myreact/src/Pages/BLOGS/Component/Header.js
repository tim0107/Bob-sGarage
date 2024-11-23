import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import AuthContext from "../../../context/AuthProvider";
import img1 from "./final-lg.jpg";
import img2 from "./bugatti.jpg";
import img3 from "./images.jpeg";
import img4 from "./lambo.jpg";
import img5 from "./mustang.webp";

export default function Header() {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null);
  const { auth } = useContext(AuthContext); // Access the auth state

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/blogs")
      .then((response) => {
        console.log(response.data);
        setBlogs(response.data);
      })
      .catch((error) => {
        console.error(
          "Error fetching data:",
          error.response ? error.response.data : error.message
        );
        setError("Unable to fetch feedback data.");
      });
  }, []);

  return (
    <div className="header-container">
      <h1 className="h1Blog">Best blogs of the week:</h1>
      <div className="img-blog">
        <img src={img1} alt="Best blogs banner 1" />
        <img src={img2} alt="Best blogs banner 2" />
        <img src={img3} alt="Best blogs banner 3" />
        <img src={img4} alt="Best blogs banner 3" />
        <img src={img5} alt="Best blogs banner 3" />
      </div>
      {error ? (
        <div className="error">{error}</div>
      ) : (
        <div className="table-container">
          <table className="blog-table">
            <thead>
              <tr>
              {auth?.accessToken && <th>ID</th>}
                <th>Title</th>
                <th>Content</th>
                <th>Author</th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((item, index) => (
                <tr key={index}>
                  {auth?.accessToken && <td>{item.id}</td>}
                  <td>{item.title}</td>
                  <td>{item.content}</td>
                  <td>{item.author}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
