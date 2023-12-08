import React, { useState } from 'react';
import axios from 'axios';
import baby1 from "../assets/baby1.png";
import baby2 from "../assets/baby2.png";
import { useNavigate } from 'react-router-dom';

export default function AddKid() {
  const nav = useNavigate();
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    nombre_ordonnel: '',
    sexe: 'Male',
    date_naissance: '',
    lieu: '',
    date_acceptation: '',
    date_integration: '',
    nom_mere_bio: '',
    nom_pere_bio: '',
    telephone: '',
    adresse: '',
    nom_mere_adoptive: '',
    nom_pere_adoptive: '',
    tel_adoptive: '',
    adresse_adoptive: '',
    photo: null,  // New field for the photo
  });

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;

    // If the input is a file input, use the files array
    const inputValue = type === 'file' ? files[0] : value;

    setFormData({
      ...formData,
      [name]: inputValue,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/bebes', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      nav("/home");
      // Handle success or any other logic after sending data
    } catch (error) {
      console.error('Error sending data:', error);
      // Handle error state or display an error message
    }
  };

  return (
    <div className='addKidSection'>
      <h1>
        <i>+</i> Add a Baby
      </h1>
      <div className="formContainer">
        <form onSubmit={handleSubmit} encType="multipart/form-data" method='POST'>
          <table>
            <tbody>
              <tr>
                <td>
                  <div className="box">
                    <span>Nom:</span>
                    <input
                      type="text"
                      name="nom"
                      value={formData.nom}
                      onChange={handleInputChange}
                    />
                  </div>
                </td>
                <td>
                  <div className="box">
                    <span>Prénom:</span>
                    <input
                      type="text"
                      name="prenom"
                      value={formData.prenom}
                      onChange={handleInputChange}
                    />
                  </div>
                </td>
                <td>
                  <div className="box">
                    <span>Nombre ordinal:</span>
                    <input
                      type="text"
                      name="nombre_ordonnel"
                      value={formData.nombre_ordonnel}
                      onChange={handleInputChange}
                    />
                  </div>
                </td>
                <td>
                  <div className="box">
                    <span>Sexe:</span>
                    <select
                      name="sexe"
                      value={formData.sexe}
                      onChange={handleInputChange}
                    >
                      <option value="homme">Homme</option>
                      <option value="femme">Femme</option>
                    </select>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="box">
                    <span>Date de naissance:</span>
                    <input
                      type="date"
                      name="date_naissance"
                      value={formData.date_naissance}
                      onChange={handleInputChange}
                    />
                  </div>
                </td>
                <td>
                  <div className="box">
                    <span>Lieu:</span>
                    <input
                      type="text"
                      name="lieu"
                      value={formData.lieu}
                      onChange={handleInputChange}
                    />
                  </div>
                </td>
                <td>
                  <div className="box">
                    <span>Date d'acceptation:</span>
                    <input
                      type="date"
                      name="date_acceptation"
                      value={formData.date_acceptation}
                      onChange={handleInputChange}
                    />
                  </div>
                </td>
                <td>
                  <div className="box">
                    <span>Date d'intégration:</span>
                    <input
                      type="date"
                      name="date_integration"
                      value={formData.date_integration}
                      onChange={handleInputChange}
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="box">
                    <span>Nom du mère biologique:</span>
                    <input
                      type="text"
                      name="nom_mere_bio"
                      value={formData.nom_mere_bio}
                      onChange={handleInputChange}
                    />
                  </div>
                </td>
                <td>
                  <div className="box">
                    <span>Nom du père biologique:</span>
                    <input
                      type="text"
                      name="nom_pere_bio"
                      value={formData.nom_pere_bio}
                      onChange={handleInputChange}
                    />
                  </div>
                </td>
                <td>
                  <div className="box">
                    <span>Téléphone du père/mère:</span>
                    <input
                      type="tel"
                      name="telephone"
                      value={formData.telephone}
                      onChange={handleInputChange}
                    />
                  </div>
                </td>
                <td>
                  <div className="box">
                    <span>Adresse de la famille biologique:</span>
                    <input
                      type="text"
                      name="adresse"
                      value={formData.adresse}
                      onChange={handleInputChange}
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="box">
                    <span>Nom de la mère adoptive:</span>
                    <input
                      type="text"
                      name="nom_mere_adoptive"
                      value={formData.nom_mere_adoptive}
                      onChange={handleInputChange}
                    />
                  </div>
                </td>
                <td>
                  <div className="box">
                    <span>Nom du père adoptif:</span>
                    <input
                      type="text"
                      name="nom_pere_adoptive"
                      value={formData.nom_pere_adoptive}
                      onChange={handleInputChange}
                    />
                  </div>
                </td>
                <td>
                  <div className="box">
                    <span>Téléphone de la famille:</span>
                    <input
                      type="tel"
                      name="tel_adoptive"
                      value={formData.tel_adoptive}
                      onChange={handleInputChange}
                    />
                  </div>
                </td>
                <td>
                  <div className="box">
                    <span>Adresse de la famille adoptive:</span>
                    <input
                      type="text"
                      name="adresse_adoptive"
                      value={formData.adresse_adoptive}
                      onChange={handleInputChange}
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td colSpan="4">
                  <div className="box">
                    <span>Photo:</span>
                    <input
                      type="file"
                      name="photo"
                      accept="image/*"
                      onChange={handleInputChange}
                    />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>

          <div className='btnImgSection'>
            <div className="images">
              <img src={baby2} alt="" />
              <img src={baby1} alt="" />
            </div>
            <div className="buttons">
              <input type="reset" value="Cancel" />
              <input type="submit" value="Add"/>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
