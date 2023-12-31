import React, { useState } from 'react';
import axios from 'axios';
import baby1 from "../assets/baby1.png";
import baby2 from "../assets/baby2.png";
import { useNavigate } from 'react-router-dom';

export default function AddKid() {
  const nav = useNavigate();
  const [formData, setFormData] = useState({
    lastname: '',
    firstname: '',
    ordinal_number: '',
    gender: 'male',
    date_of_birth: '',
    place: '',
    acceptance_date: '',
    integration_date: '',
    bio_mother_name: '',
    bio_father_name: '',
    phone: '',
    address: '',
    adoptive_mother_name: '',
    adoptive_father_name: '',
    adoptive_phone: '',
    adoptive_address: '',
    photo: null, 
  });

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;

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
      const response = await axios.post('http://127.0.0.1:8000/api/bebes', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      nav("/home");
    } catch (error) {
      console.error('Error sending data:', error);
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
                    <span>Last Name:</span>
                    <input
                      type="text"
                      name="lastname"
                      value={formData.lastname}
                      onChange={handleInputChange}
                    />
                  </div>
                </td>
                <td>
                  <div className="box">
                    <span>First Name:</span>
                    <input
                      type="text"
                      name="firstname"
                      value={formData.firstname}
                      onChange={handleInputChange}
                    />
                  </div>
                </td>
                <td>
                  <div className="box">
                    <span>Ordinal Number:</span>
                    <input
                      type="text"
                      name="ordinal_number"
                      value={formData.ordinal_number}
                      onChange={handleInputChange}
                    />
                  </div>
                </td>
                <td>
                  <div className="box">
                    <span>Gender:</span>
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleInputChange}
                    >
                      <option value="male">Male</option>
                      <option value="female">Female</option>
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
                      name="date_of_birth"
                      value={formData.date_of_birth}
                      onChange={handleInputChange}
                    />
                  </div>
                </td>
                <td>
                  <div className="box">
                    <span>Place:</span>
                    <input
                      type="text"
                      name="place"
                      value={formData.place}
                      onChange={handleInputChange}
                    />
                  </div>
                </td>
                <td>
                  <div className="box">
                    <span>Acceptance Date:</span>
                    <input
                      type="date"
                      name="acceptance_date"
                      value={formData.acceptance_date}
                      onChange={handleInputChange}
                    />
                  </div>
                </td>
                <td>
                  <div className="box">
                    <span>Integration Date:</span>
                    <input
                      type="date"
                      name="integration_date"
                      value={formData.integration_date}
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
                      name="bio_mother_name"
                      value={formData.bio_mother_name}
                      onChange={handleInputChange}
                    />
                  </div>
                </td>
                <td>
                  <div className="box">
                    <span>Bio Father's Name:</span>
                    <input
                      type="text"
                      name="bio_father_name"
                      value={formData.bio_father_name}
                      onChange={handleInputChange}
                    />
                  </div>
                </td>
                <td>
                  <div className="box">
                    <span>Phone:</span>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                </td>
                <td>
                  <div className="box">
                    <span>Address:</span>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
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
                      name="adoptive_mother_name"
                      value={formData.adoptive_mother_name}
                      onChange={handleInputChange}
                    />
                  </div>
                </td>
                <td>
                  <div className="box">
                    <span>Adoptive Father's Name:</span>
                    <input
                      type="text"
                      name="adoptive_father_name"
                      value={formData.adoptive_father_name}
                      onChange={handleInputChange}
                    />
                  </div>
                </td>
                <td>
                  <div className="box">
                    <span>Adoptive Phone:</span>
                    <input
                      type="tel"
                      name="adoptive_phone"
                      value={formData.adoptive_phone}
                      onChange={handleInputChange}
                    />
                  </div>
                </td>
                <td>
                  <div className="box">
                    <span>Adoptive Address:</span>
                    <input
                      type="text"
                      name="adoptive_address"
                      value={formData.adoptive_address}
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
