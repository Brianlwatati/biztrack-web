"use client";

import Image from "next/image";
import Link from "next/link";
import GitHub from "../../../public/github.png";
import Google from "../../../public/google.webp";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("http://127.0.0.1:5000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Failed to log in");
      }

      const data = await response.json();
      console.log("Login response:", data);

      router.push("/dashboard");
    } catch (err) {
      setError("Failed to log in. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1 className="text-teal-500 text-4xl font-semibold">Welcome Back</h1>
      <p className="text-gray-600 text-sm font-semibold mt-2 mb-4">
        Please log in to continue.
      </p>

      <div className="mt-4 w-96 text-base">
        <div className="mb-6 flex gap-3">
          <button className="flex items-center gap-2 border border-gray-300 rounded-xl py-2 px-4 hover:bg-gray-100 transition duration-200">
            <Image src={Google} alt="Google Icon" className="w-4 h-4" />
            <span className="text-sm">Sign in with Google</span>
          </button>
          <button className="flex items-center gap-2 border border-gray-300 rounded-xl py-2 px-4 hover:bg-gray-100 transition duration-200">
            <Image src={GitHub} alt="GitHub Icon" className="w-4 h-4" />
            <span className="text-sm">Sign in with GitHub</span>
          </button>
        </div>
        <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="font-semibold text-gray-900">
              Email:
            </label>
            <input
              className="w-full bg-white text-sm border border-gray-300 rounded-xl h-10 px-3"
              placeholder="Your Email Address"
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password" className="font-semibold text-gray-900">
              Password:
            </label>
            <input
              className="w-full bg-white text-sm border border-gray-300 rounded-xl h-10 px-3"
              placeholder="Your Password"
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && (
            <p className="text-sm text-red-600 font-semibold">{error}</p>
          )}
          <button
            type="submit"
            disabled={loading}
            className="bg-teal-600 text-white py-2 px-4 rounded-xl hover:bg-teal-700 transition duration-200"
          >
            {loading ? "Logging in..." : "Log In"}
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
