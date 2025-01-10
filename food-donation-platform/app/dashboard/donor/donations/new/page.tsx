// src/app/dashboard/donor/donations/new/page.tsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function NewDonationPage() {
  const [foodType, setFoodType] = useState('');
  const [quantity, setQuantity] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleDonationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Implement donation logic (e.g., Firebase database update)

    router.push('/dashboard/donor'); // Redirect to dashboard after successful donation
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800">New Donation</h2>
      {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
      <form onSubmit={handleDonationSubmit}>
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">Food Type</label>
          <input
            type="text"
            value={foodType}
            onChange={(e) => setFoodType(e.target.value)}
            required
            className="w-full px-4 py-2 mt-2 border rounded-lg"
          />
        </div>
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">Quantity</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
            className="w-full px-4 py-2 mt-2 border rounded-lg"
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
        >
          Donate
        </button>
      </form>
    </div>
  );
}
