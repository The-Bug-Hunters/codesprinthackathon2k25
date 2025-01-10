// src/app/dashboard/admin/page.tsx
'use client';

export default function AdminPanel() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-800">Admin Panel</h1>
      <div className="mt-6 space-y-4">
        <button className="px-6 py-3 text-white bg-red-600 rounded-lg hover:bg-red-700">
          Approve Donations
        </button>
        <button className="px-6 py-3 text-white bg-yellow-600 rounded-lg hover:bg-yellow-700">
          Manage Users
        </button>
        <button className="px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700">
          View Reports
        </button>
      </div>
    </div>
  );
}
