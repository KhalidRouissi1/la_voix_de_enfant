import React from 'react';
import './Header.css'; // Import the associated CSS file
import {Link} from "react-router-dom"
import aven from "../../assets/A.V.E.N.png"
const Header = () => {
  return (

    <>
    <header className="header">
      <div className="logo">
        <img src={aven} alt="Logo" />

          </div>
      <nav>
        <ul className="nav-links">
          <li><Link to="addKid">AJOUTER</Link></li>
          <li><Link to="deleteKid" className='blue' >SUPPRIMER</Link></li>
          <li><a href="#">AFFICHER</a></li>
          <li><a className='blue' href="#">CALCUL STATIQUE</a></li>
        </ul>
      </nav>
    </header>
    </>
  );
};

export default Header;
