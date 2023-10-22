import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Map = () => {
  const position = [51.505, -0.09]; // Replace with your latitude and longitude

  return (
    <div className="map-container">
      <MapContainer
        center={position}
        zoom={13} // Adjust the zoom level as needed
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>Your location here</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
