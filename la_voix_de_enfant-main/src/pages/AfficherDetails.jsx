// DetailsPage.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './DetailsPage.css';

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
      <h1 className="details-heading">Details Page</h1>
      <div className="details-card">
        <div className="details-info">
          <p><span className="details-label">Nom:</span> {details.nom}</p>
          <p><span className="details-label">Prenom:</span> {details.prenom}</p>
          <p><span className="details-label">Nombre Ordonnel:</span> {details.nombre_ordonnel}</p>
          <p><span className="details-label">Sexe:</span> {details.sexe}</p>
          <p><span className="details-label">Date de Naissance:</span> {details.date_naissance}</p>
          <p><span className="details-label">Lieu:</span> {details.lieu}</p>
          <p><span className="details-label">Date d'Acceptation:</span> {details.date_acceptation}</p>
          <p><span className="details-label">Date d'Integration:</span> {details.date_integration}</p>
          <p><span className="details-label">Nom Mère Bio:</span> {details.nom_mere_bio}</p>
          <p><span className="details-label">Nom Père Bio:</span> {details.nom_pere_bio}</p>
          <p><span className="details-label">Téléphone:</span> {details.telephone}</p>
          <p><span className="details-label">Adresse:</span> {details.adresse}</p>
          <p><span className="details-label">Nom Mère Adoptive:</span> {details.nom_mere_adoptive}</p>
          <p><span className="details-label">Nom Père Adoptive:</span> {details.nom_pere_adoptive}</p>
          <p><span className="details-label">Téléphone Adoptif:</span> {details.tel_adoptive}</p>
          <p><span className="details-label">Adresse Adoptive:</span> {details.adresse_adoptive}</p>
          <p><span className="details-label">Created At:</span> {details.created_at}</p>
          <p><span className="details-label">Updated At:</span> {details.updated_at}</p>
        </div>
        {details.photo && (
          <div className="details-image-container">
            <img className="details-image" src={`http://127.0.0.1:8000/storage/${details.photo}`} alt={`${details.nom} ${details.prenom}`} />
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailsPage;
