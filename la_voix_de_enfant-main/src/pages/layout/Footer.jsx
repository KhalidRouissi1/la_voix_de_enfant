import React from 'react';

const Footer = () => {
  // Association information
  const associationInfo = {
    phoneNumber: "95 634 344",
    title: "La Voix de L'Enfant de Nabeul",
    location: "Association La Voix de L'enfant Nabeul, 18 Ave. Mongi Slim, Nabeul"
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="association-info">
          <h3>{associationInfo.title}</h3>
          <p>Phone: {associationInfo.phoneNumber}</p>
          <p>Location: {associationInfo.location}</p>
        </div>
        <div className="map-container">
          <iframe
            title="Location Map"
            width="300"
            height="200"
            frameBorder="0"
            style={{ border: 0 }}
            src={`https://www.openstreetmap.org/export/embed.html?bbox=10.6885,36.4545,10.7013,36.4591&layer=mapnik`}
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
