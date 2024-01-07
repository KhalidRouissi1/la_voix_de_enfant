import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './afficher.css';
import female from "../assets/female.jpg";
import male from "../assets/male.jpg";
import { FaSearch } from 'react-icons/fa'; 

const Afficher = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const apiUrl = 'http://127.0.0.1:8000/api/bebes';

    axios.get(apiUrl)
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const filteredData = data.filter(item => {
    const fullName = `${item.nom} ${item.prenom}`.toLowerCase();
    return fullName.includes(searchTerm.toLowerCase());
  });

  return (
    <div className="container">
      <div className="search-container">
        <FaSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="grid">
        {filteredData.map(item => (
          <Link key={item.id} to={`/afficher/${item.id}`} className="card-link">
            <div className="card">
              {item.sexe !== "Male" && (
                <img className="card-image" src={female} alt={`Photo of a kid`} />
              )}

              {item.sexe === "Male" && (
                <img className="card-image" src={male} alt={`Photo of a kid`} />
              )}

              <div className="card-content">
                <p className="card-text">Name: {item.nom}</p>
                <p className="card-text">LastName: {item.prenom}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Afficher;
