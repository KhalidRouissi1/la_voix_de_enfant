// DetailsPage.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './DetailsPage.css';
import { useParams, Link } from 'react-router-dom';

const DetailsPage = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({});

  useEffect(() => {
    const apiUrl = `http://127.0.0.1:8000/api/bebes/${id}`;

    axios.get(apiUrl)
      .then(response => {
        setDetails(response.data);
      })
      .catch(error => {
        console.error('Error fetching details:', error);
      });
  }, [id]);

  return (
    <div className="details-container">
      <h1 className="details-heading">Baby Details</h1>
      <div className="details-card">
        <div className="details-info">
        <div className="details-row">
            <span className="details-label">Id:</span>
            <p>{details.id}</p>
          </div>
          <div className="details-row">
            <span className="details-label">Name:</span>
            <p>{details.nom}</p>
          </div>
          <div className="details-row">
            <span className="details-label">Last name:</span>
            <p>{details.prenom}</p>
          </div>
          <div className="details-row">
            <span className="details-label">Number Ordonnel:</span>
            <p>{details.nombre_ordonnel}</p>
          </div>
          <div className="details-row">
            <span className="details-label">Gender:</span>
            <p>{details.sexe}</p>
          </div>
          <div className="details-row">
            <span className="details-label">Date of birth:</span>
            <p>{details.date_naissance}</p>
          </div>
          <div className="details-row">
            <span className="details-label">Place:</span>
            <p>{details.lieu}</p>
          </div>
          <div className="details-row">
            <span className="details-label">Date of Acception:</span>
            <p>{details.date_acceptation}</p>
          </div>
          <div className="details-row">
            <span className="details-label">Date of integration:</span>
            <p>{details.date_integration}</p>
          </div>
          <div className="details-row">
            <span className="details-label">Name of Bio Mother:</span>
            <p>{details.nom_mere_bio}</p>
          </div>
          <div className="details-row">
            <span className="details-label">Name of Bio Father:</span>
            <p>{details.nom_pere_bio}</p>
          </div>
          <div className="details-row">
            <span className="details-label">Mobile Phone:</span>
            <p>{details.telephone}</p>
          </div>
          <div className="details-row">
            <span className="details-label">Adress:</span>
            <p>{details.adresse}</p>
          </div>
          <div className="details-row">
            <span className="details-label">Name of Adoptive mother:</span>
            <p>{details.nom_mere_adoptive}</p>
          </div>
          <div className="details-row">
            <span className="details-label">Name of Adoptive father:</span>
            <p>{details.nom_pere_adoptive}</p>
          </div>
          <div className="details-row">
            <span className="details-label">Adoptive mobile phone :</span>
            <p>{details.tel_adoptive}</p>
          </div>
          <div className="details-row">
            <span className="details-label">Adoptive Adress:</span>
            <p>{details.adresse_adoptive}</p>
          </div>
          <div className="details-row">
            <span className="details-label">Created At:</span>
            <p>{details.created_at}</p>
          </div>
          <div className="details-row">
            <span className="details-label">Updated At:</span>
            <p>{details.updated_at}</p>
          </div>
        </div>
        {details.photo && (
          <div className="details-image-container">
            <img className="details-image" src={`http://127.0.0.1:8000/storage/${details.photo}`} alt={`${details.nom} ${details.prenom}`} />
          </div>
        )}

        <div className="details-actions">
        <Link to={`/edit/${id}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Edit
        </Link>

        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
