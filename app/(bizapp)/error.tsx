"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex items-center justify-center h-64 mt-28 gap-5">
      <h2 className="text-red-600 text-xl font-bold">Something went wrong!</h2>
      <button
        onClick={() => reset()}
        className=" bg-teal-600 text-white py-2 px-4 rounded-xl hover:bg-teal-700 transition duration-200"
      >
        Try again
      </button>
    </div>
  );
}
