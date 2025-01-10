// src/app/tracking/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker, DirectionsRenderer } from '@react-google-maps/api';
import { useRouter } from 'next/navigation';

const API_KEY = 'AIzaSyDG737orXlY6hPsJHbNXTEOCvA3oKHsslw';


const TrackingPage = () => {
  const [directions, setDirections] = useState<any>(null);
  const [driverLocation, setDriverLocation] = useState<google.maps.LatLng | null>(null);
  const router = useRouter();

  useEffect(() => {
    // Simulate a driver's current location
    const mockDriverLocation = { lat: 37.7749, lng: -122.4194 }; // San Francisco coordinates
    setDriverLocation(new google.maps.LatLng(mockDriverLocation.lat, mockDriverLocation.lng));

    // Simulate a destination (e.g., food bank location)
    const destination = { lat: 37.7849, lng: -122.4294 }; // Another point in San Francisco

    const directionsService = new google.maps.DirectionsService();
    directionsService.route(
      {
        origin: mockDriverLocation,
        destination,
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          setDirections(result);
        } else {
          console.error('Error fetching directions:', status);
        }
      }
    );
  }, []);

  return (
    <LoadScript googleMapsApiKey={API_KEY}>
      <div className="min-h-screen bg-gray-100">
        <h1 className="text-3xl font-bold text-center text-gray-800 py-6">Real-Time Delivery Tracking</h1>
        <div className="max-w-screen-lg mx-auto px-4">
          <div className="relative w-full h-96">
            <GoogleMap
              mapContainerStyle={{ width: '100%', height: '100%' }}
              center={driverLocation || { lat: 37.7749, lng: -122.4194 }}
              zoom={14}
            >
              {driverLocation && <Marker position={driverLocation} />}
              {directions && <DirectionsRenderer directions={directions} />}
            </GoogleMap>
          </div>
        </div>
      </div>
    </LoadScript>
  );
};

export default TrackingPage;
