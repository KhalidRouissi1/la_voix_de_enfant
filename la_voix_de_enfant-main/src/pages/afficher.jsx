// Afficher.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './afficher.css';

const Afficher = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Define the API URL
    const apiUrl = 'http://127.0.0.1:8000/api/bebes';

    // Fetch data from the API
    axios.get(apiUrl)
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); 

  return (
    <div className="container">
      <div className="grid">
        {data.map(item => (
          <Link key={item.id} to={`/afficher/${item.id}`} className="card-link">
            <div className="card">
              {item.photo && (
                <img className="card-image" src={`http://127.0.0.1:8000/storage/${item.photo}`} alt={`Photo of ${item.nom} ${item.prenom}`} />
              )}
              <div className="card-content">
                <p className="card-text">Nom: {item.nom}</p>
                <p className="card-text">Prenom: {item.prenom}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Afficher;
