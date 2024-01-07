import React, { useState, useEffect } from 'react';
import axios from 'axios';
import baby1 from "../assets/baby1.png";
import baby2 from "../assets/baby2.png";
import { useNavigate, useParams } from 'react-router-dom';

export default function EditKid() {
  const nav = useNavigate();
  const { id } = useParams();

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
    photo: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/bebes/${id}`);
        setFormData(response.data);
      } catch (error) {
        console.error('Error fetching baby data:', error);
      }
    };

    fetchData();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }

    try {
        await axios.put(`http://127.0.0.1:8000/api/bebes/${id}`, data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      nav("/home");
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  return (
    <div className='addKidSection'>
      <h1>Edit Baby</h1>
      <div className="formContainer">
        <form onSubmit={handleSubmit} encType="multipart/form-data" method='PUT'>
          <table>
            <tbody>
              <tr>
                <td>
                  <div className="box">
                  <span>First Name:</span>
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
                  <span>Last Name:</span>
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
                  <span>Ordinal Number:</span>
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
                  <span>Gender:</span>
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
                  <span>Date of Birth:</span>
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
                  <span>Place:</span>
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
                  <span>Integration Date:</span>
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
                  <span>Bio Mother's Name:</span>
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
                  <span>Bio Father's Name:</span>
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
                  <span>Phone:</span>
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
                  <span>Address:</span>
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
                  <span>Adoptive Mother's Name:</span>
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
                  <span>Adoptive Father's Name:</span>
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
                  <span>Adoptive Phone:</span>
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
                  <span>Adoptive Address:</span>
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
              <input type="submit" value="Update"/>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
  
}
