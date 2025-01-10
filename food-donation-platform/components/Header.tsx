// src/components/Header.tsx
"use client";  // Add this directive to mark the file as a client component

import Link from 'next/link';
import { useRouter } from 'next/navigation';  // Import from next/navigation

const Header = () => {
  const router = useRouter();  // Works with next/navigation

  return (
    <header className="bg-blue-500 text-white p-4">
      <div className="flex justify-between items-center">
        <Link href="/">
          <a className="text-2xl font-bold">Food Donation Platform</a>
        </Link>
        <nav className="space-x-4">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/donations">Donate</Link>
          
        </nav>
      </div>
    </header>
  );
};

export default Header;
