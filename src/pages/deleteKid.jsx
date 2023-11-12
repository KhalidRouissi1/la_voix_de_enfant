import React from 'react'
import baby1 from "../assets/baby1Delete.png"
import baby2 from "../assets/baby2Delete.png"
export default function DeleteKide() {
  return (
    <div className='deleteKid'>

    <h1>
        <i>+</i> Supprime un bébé:
      </h1>


    <div className="container">
      <div className="box">
        <div className="whiteBox">
          <span>Id_Bébé:</span>
          <input type="text" name="" id="" />
        <input type="submit" className='btnDelete'  value="Supprime" name="" id="" />

        </div>
      </div>
      <div className="images">
          <img src={baby2} alt="" />
          <img src={baby1} alt="" />
      </div>
    </div>
    </div>

  )
}
