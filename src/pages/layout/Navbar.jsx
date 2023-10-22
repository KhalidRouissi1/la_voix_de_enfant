import React from 'react';
import logo from "../../assets/logo.jpg"
function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="buttons">
        <button className="nav-button">Button 1</button>
        <button className="nav-button">Button 2</button>
        <button className="nav-button">Button 3</button>
        <button className="nav-button">Button 4</button>
      </div>
    </div>
  );
}

export default Navbar;
