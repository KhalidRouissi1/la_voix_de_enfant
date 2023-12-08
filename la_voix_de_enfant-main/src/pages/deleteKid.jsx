import React, { useState } from 'react';
import axios from 'axios';
import baby1 from "../assets/baby1Delete.png";
import baby2 from "../assets/baby2Delete.png";

export default function DeleteKide() {
  const [id, setId] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.delete(`http://127.0.0.1:8000/api/bebes/${id}`);
      alert("Delete done");
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  const handleInputChange = (e) => {
    setId(e.target.value);
  };

  return (
    <div className='deleteKid'>
      <h1>
        <i>+</i> Supprime un bébé:
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <div className="box">
            <div className="whiteBox">
              <span>Id_Bébé:</span>
              <input
                type="text"
                name="id"
                value={id}
                onChange={handleInputChange}
              />
              <input
                type="submit"
                className='btnDelete'
                value="Supprime"
              />
            </div>
          </div>
          <div className="images">
            <img src={baby2} alt="" />
            <img src={baby1} alt="" />
          </div>
        </div>
      </form>
    </div>
  );
}
