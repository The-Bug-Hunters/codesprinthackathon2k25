// src/components/Map.tsx
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import Mapbox or Google Maps
const Map = dynamic(() => import('react-map-gl'), { ssr: false });

const MapComponent = () => {
  const [location, setLocation] = useState({ latitude: 0, longitude: 0 });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    });
  }, []);

  return (
    <div className="w-full h-96">
      <Map
        initialViewState={{
          latitude: location.latitude,
          longitude: location.longitude,
          zoom: 14,
        }}
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
      />
    </div>
  );
};

export default MapComponent;
