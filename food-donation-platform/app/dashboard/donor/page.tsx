// src/app/dashboard/donor/page.tsx
'use client';

import Link from 'next/link';

export default function DonorDashboard() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-800">Donor Dashboard</h1>
      <div className="mt-6 space-y-4">
        <Link
          href="/dashboard/donor/donations/new"
          className="block px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
        >
          Make a New Donation
        </Link>
        <Link
          href="/dashboard/donor/donations/history"
          className="block px-6 py-3 text-white bg-green-600 rounded-lg hover:bg-green-700"
        >
          View Donation History
        </Link>
        <Link
          href="/dashboard/donor/donations/proof"
          className="block px-6 py-3 text-white bg-orange-600 rounded-lg hover:bg-orange-700"
        >
          Proof of Donation
        </Link>
      </div>
    </div>
  );
}
