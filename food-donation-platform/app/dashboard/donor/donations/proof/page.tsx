// src/app/dashboard/donor/donations/proof/page.tsx
'use client';

export default function ProofOfDonationPage() {
  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800">Proof of Donation</h2>
      <div className="mt-4">
        <p>Donation ID: #12345</p>
        <p>Food Type: Rice</p>
        <p>Quantity: 5 Kgs</p>
        <p>Status: Verified</p>
      </div>
    </div>
  );
}
