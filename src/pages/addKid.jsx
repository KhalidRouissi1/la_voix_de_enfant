import React, { useState } from 'react';
import axios from 'axios';
import baby1 from "../assets/baby1.png"
import baby2 from "../assets/baby2.png"
export default function AddKid() {
  const [formData, setFormData] = useState({
    idBebe: '',
    nomPrenom: '',
    nombreOrdinal: '',
    sexe: '',
    dateNaissance: '',
    lieu: '',
    dateAcceptation: '',
    dateIntegration: '',
    nomMereBiologique: '',
    nomPereBiologique: '',
    telMerePere: '',
    adresseFamilleBiologique: '',
    nomMereAdoptive: '',
    nomPereAdoptive: '',
    telFamille: '',
    adresseFamilleAdoptive: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('YOUR_API_ENDPOINT', formData);
      console.log('Data sent:', response.data);
      // Handle success or any other logic after sending data
    } catch (error) {
      console.error('Error sending data:', error);
      // Handle error state or display an error message
    }
  };

  return (
    <div className='addKidSection'>
      <h1>
        <i>+</i> Ajouter un bebe
      </h1>
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <table>
            <tbody>
              <tr>
                <td>
                  <div className="box">
                    <span>id_Bébé:</span>
                    <input
                      type="text"
                      name="idBebe"
                      value={formData.idBebe}
                      onChange={handleInputChange}
                    />
                  </div>
                </td>
                <td>
                  <div className="box">
                    <span>Nom et Prénom:</span>
                    <input
                      type="text"
                      name="nomPrenom"
                      value={formData.nomPrenom}
                      onChange={handleInputChange}
                    />
                  </div>
                </td>
                <td>
                  <div className="box">
                    <span>Nombre ordinal:</span>
                    <input
                      type="text"
                      name="nombreOrdinal"
                      value={formData.nombreOrdinal}
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
                      name="dateNaissance"
                      value={formData.dateNaissance}
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
                      name="dateAcceptation"
                      value={formData.dateAcceptation}
                      onChange={handleInputChange}
                    />
                  </div>
                </td>
                <td>
                <div className="box">
                    <span>Date d'intégration:</span>
                    <input
                      type="date"
                      name="dateIntegration"
                      value={formData.dateIntegration}
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
                      name="nomMereBiologique"
                      value={formData.nomMereBiologique}
                      onChange={handleInputChange}
                    />
                  </div>
                </td>
                <td>
                  <div className="box">
                    <span>Nom du père biologique:</span>
                    <input
                      type="text"
                      name="nomPereBiologique"
                      value={formData.nomPereBiologique}
                      onChange={handleInputChange}
                    />
                  </div>
                </td>
                <td>
                  <div className="box">
                    <span>Téléphone du père/mère:</span>
                    <input
                      type="tel"
                      name="telMerePere"
                      value={formData.telMerePere}
                      onChange={handleInputChange}
                    />
                  </div>
                </td>
                <td>
                  <div className="box">
                    <span>Adresse de la famille biologique:</span>
                    <input
                      type="text"
                      name="adresseFamilleBiologique"
                      value={formData.adresseFamilleBiologique}
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
                      name="nomMereAdoptive"
                      value={formData.nomMereAdoptive}
                      onChange={handleInputChange}
                    />
                  </div>
                </td>
                <td>
                  <div className="box">
                    <span>Nom du père adoptif:</span>
                    <input
                      type="text"
                      name="nomPereAdoptive"
                      value={formData.nomPereAdoptive}
                      onChange={handleInputChange}
                    />
                  </div>
                </td>
                <td>
                  <div className="box">
                    <span>Téléphone de la famille:</span>
                    <input
                      type="tel"
                      name="telFamille"
                      value={formData.telFamille}
                      onChange={handleInputChange}
                    />
                  </div>
                </td>
                <td>
                  <div className="box">
                    <span>Adresse de la famille adoptive:</span>
                    <input
                      type="text"
                      name="adresseFamilleAdoptive"
                      value={formData.adresseFamilleAdoptive}
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
              <input type="reset" value="Annuler" />
              <input type="submit" value="Ajouter" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
