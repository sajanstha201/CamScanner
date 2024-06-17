import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

export const AboutUs = () => {
  const [mapLoaded, setMapLoaded] = useState(false);

  const defaultCenter = {
    lat: 27.681505372996934,
    lng: 85.32804964028425
  };

  const mapStyles = {
    height: '400px',
    width: '400px'
  };

  const handleLoad = () => {
    setMapLoaded(true);
    console.log('Map loaded successfully');
  };

  return (
    <>
      <h1>This is the About Us page</h1>
      <div>
        <LoadScript googleMapsApiKey="AIzaSyDR-Piy7y9bIfz9HzE_dN_TAXJbM9UtA24">
          <GoogleMap
            mapContainerStyle={mapStyles}
            zoom={15}
            center={defaultCenter}
            onLoad={handleLoad}
          >
            {mapLoaded && <Marker position={defaultCenter} />}
          </GoogleMap>
        </LoadScript>
      </div>
    </>
  );
};
