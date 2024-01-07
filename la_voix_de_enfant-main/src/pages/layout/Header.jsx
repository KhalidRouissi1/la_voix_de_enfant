import React from 'react';
import './Header.css'; 
import {Link} from "react-router-dom"
import aven from "../../assets/A.V.E.N.png"
import Stat from '../Stat';
const Header = () => {
  return (

    <>
    <header className="header">
      <div className="logo">
       <Link to="/home">
       <img src={aven} alt="Logo" />
       </Link>

          </div>
      <nav>
        <ul className="nav-links">
          <li><Link to="addKid">AJOUTER</Link></li>
          <li><Link to="deleteKid" className='blue' >SUPPRIMER</Link></li>
          <li><Link to="afficher">AFFICHER</Link></li>
          <li><a href=''  className='blue' >Enfant dans l'association <Stat/></a></li>
        </ul>
      </nav>
    </header>
    </>
  );
};

export default Header;
