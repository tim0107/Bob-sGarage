import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import AuthContext from "../../../context/AuthProvider";

export default function Servicecontent() {
  const [data, setData] = useState([]);
  const { auth } = useContext(AuthContext); // Access the auth state

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/services")
      .then((response) => {
        setData(response.data);
        console.log("Services fetched:", response.data);
      })
      .catch((error) => {
        console.error(
          "Error fetching data:",
          error.response ? error.response.data : error.message
        );
      });
  }, []);

  return (
    <div className="service-container">
      <h1 className="service-header">Our Services</h1>
      <div className="service-list">
        {data.map((item) => (
          <div className="service-card" key={item.id}>
            {auth?.accessToken && (
              <h2 className="service-id">Service ID: {item.id}</h2>
            )}
            <h3 className="service-name">Name: {item.name}</h3>
            <p className="service-description">{item.description}</p>
            <h3 className="service-price">Price: ${item.price}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
