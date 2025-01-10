// src/app/dashboard/food-bank/page.tsx
'use client';

export default function FoodBankDashboard() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-800">Food Bank Dashboard</h1>
      <div className="mt-6 space-y-4">
        <button className="px-6 py-3 text-white bg-green-600 rounded-lg hover:bg-green-700">
          Manage Donations
        </button>
        <button className="px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700">
          View Incoming Donations
        </button>
      </div>
    </div>
  );
}
