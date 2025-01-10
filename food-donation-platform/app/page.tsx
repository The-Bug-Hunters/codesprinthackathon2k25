// src/app/page.tsx
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-12 bg-gradient-to-r from-green-400 to-blue-500">
      <div className="text-center max-w-3xl">
        <h1 className="text-4xl font-bold text-white md:text-6xl">
          Join the Fight Against Food Waste
        </h1>
        <p className="mt-4 text-lg text-gray-100 md:text-xl">
          Our platform connects food donors, food banks, and delivery drivers to reduce food waste
          and help communities in need.
        </p>
        <div className="mt-8 space-x-4">
          <Link
            href="/(auth)/register"
            className="px-6 py-3 text-lg font-semibold text-white bg-green-600 rounded-lg hover:bg-green-700"
          >
            Get Started
          </Link>
          <Link
            href="/about"
            className="px-6 py-3 text-lg font-semibold text-green-600 bg-white border-2 border-green-600 rounded-lg hover:bg-green-50"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}
