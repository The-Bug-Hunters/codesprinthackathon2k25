// src/app/dashboard/donor/donations/history/page.tsx
'use client';

import { useEffect, useState } from 'react';

export default function DonationHistoryPage() {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    // Fetch donation history from Firebase
    const fetchDonations = async () => {
      // Replace with Firebase query logic
      const data = []; // Dummy data for now
      setDonations(data);
    };
    fetchDonations();
  }, []);

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800">Donation History</h2>
      <ul className="mt-4 space-y-4">
        {donations.length > 0 ? (
          donations.map((donation, index) => (
            <li key={index} className="border-b py-3">
              <div className="text-lg font-medium text-gray-800">{donation.foodType}</div>
              <div className="text-sm text-gray-500">Quantity: {donation.quantity}</div>
              <div className="text-sm text-gray-500">Date: {donation.date}</div>
            </li>
          ))
        ) : (
          <p>No donations made yet.</p>
        )}
      </ul>
    </div>
  );
}
