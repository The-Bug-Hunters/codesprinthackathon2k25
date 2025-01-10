// app/error.tsx
'use client'

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const ErrorPage = ({ error }: { error: Error }) => {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState<string>('');

  // Set the error message based on the error object passed
  useEffect(() => {
    if (error) {
      setErrorMessage(error.message || 'Something went wrong. Please try again.');
    }
  }, [error]);

  const handleRetry = () => {
    // This could be useful to retry a failed request or reload the page
    router.refresh();
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-red-100">
      <h1 className="text-4xl font-semibold text-red-700">Oops! Something went wrong.</h1>
      <p className="mt-4 text-xl text-gray-600">{errorMessage}</p>
      <button
        onClick={handleRetry}
        className="mt-6 px-6 py-2 bg-red-500 text-white rounded-lg shadow-lg hover:bg-red-600 transition duration-300"
      >
        Try Again
      </button>
    </div>
  );
};

export default ErrorPage;
