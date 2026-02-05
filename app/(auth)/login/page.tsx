import Link from "next/link";

export default function LoginPage() {
  return (
    <div>
      <h1 className="text-teal-500 text-4xl font-semibold">Welcome Back</h1>
      <p className="text-gray-600 text-sm font-semibold mt-2 mb-4">
        Please log in to continue.
      </p>

      <div className="mt-8  w-90 text-base">
        <form className="flex flex-col gap-8">
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="font-semibold text-gray-900">
              Email:
            </label>
            <input
              className="w-full text-sm border border-gray-300 rounded-xl h-10 px-3"
              placeholder="Your Email Address"
              type="email"
              id="email"
              name="email"
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password" className="font-semibold text-gray-900">
              Password:
            </label>
            <input
              className="w-full text-sm border border-gray-300 rounded-xl h-10 px-3"
              placeholder="Your Password"
              type="password"
              id="password"
              name="password"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-teal-600 text-white py-2 px-4 rounded-xl hover:bg-teal-700 transition duration-200"
          >
            Log In
          </button>
        </form>

        <div className="mt-4 text-sm font-semibold text-gray-900">
          Don't have an account?{" "}
          <Link href="/register" className="text-teal-600 hover:underline">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}
