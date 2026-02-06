"use client";

import Image from "next/image";
import Link from "next/link";
import GitHub from "../../../public/github.png";
import Google from "../../../public/google.webp";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      if (password !== confirmPassword) {
        throw new Error("Passwords do not match");
      }

      const response = await fetch("http://127.0.0.1:5000/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, confirmPassword }),
      });

      if (!response.ok) {
        throw new Error("Failed to register");
      }

      const data = await response.json();
      console.log("Register response:", data);

      router.push("/dashboard");
    } catch (err) {
      setError("Failed to register. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1 className="text-teal-500 text-4xl font-semibold">
        Welcome to BizTrack
      </h1>
      <p className="text-gray-600 text-sm font-semibold mt-2 mb-4">
        Please sign up to continue.
      </p>

      <div className="mt-4 w-96 text-base">
        <div className="mb-6 flex gap-3">
          <button className="flex items-center gap-2 border border-gray-300 rounded-xl py-2 px-4 hover:bg-gray-100 transition duration-200">
            <Image src={Google} alt="Google Icon" className="w-4 h-4" />
            <span className="text-sm">Sign up with Google</span>
          </button>
          <button className="flex items-center gap-2 border border-gray-300 rounded-xl py-2 px-4 hover:bg-gray-100 transition duration-200">
            <Image src={GitHub} alt="GitHub Icon" className="w-4 h-4" />
            <span className="text-sm">Sign up with GitHub</span>
          </button>
        </div>
        <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="font-semibold text-gray-900">
              Email:
            </label>
            <input
              className="bg-white w-full text-sm border border-gray-300 rounded-xl h-10 px-3"
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

          <div className="flex flex-col gap-1">
            <label
              htmlFor="confirmPassword"
              className="font-semibold text-gray-900"
            >
              Confirm Password:
            </label>
            <input
              className="w-full text-sm border bg-white border-gray-300 rounded-xl h-10 px-3"
              placeholder="Confirm Your Password"
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-teal-600 text-white py-2 px-4 rounded-xl hover:bg-teal-700 transition duration-200"
          >
            {loading ? "Registering..." : "Sign Up"}
          </button>
        </form>

        <div className="mt-4 text-sm font-semibold text-gray-900">
          Already have an account?{" "}
          <Link href="/login" className="text-teal-600 hover:underline">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}
