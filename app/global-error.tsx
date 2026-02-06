"use client"; // Error boundaries must be Client Components

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    // global-error must include html and body tags
    <html>
      <body className="flex h-screen items-center justify-center bg-gray-100">
        <h2 className="text-red-600 text-xl font-bold">
          Something went wrong!
        </h2>
        <button
          onClick={() => reset()}
          className="ml-4 bg-teal-600 text-white py-2 px-4 rounded-xl hover:bg-teal-700 transition duration-200"
        >
          Try again
        </button>
      </body>
    </html>
  );
}
