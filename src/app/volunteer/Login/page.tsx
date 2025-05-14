// app/login/page.tsx
"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface FormData {
  fullName: string;
  cnic: string;
  email: string;
  password: string;
}

const VolunteerLogin = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    cnic: "",
    email: "",
    password: "",
  });
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Store user data for ID card
      const userData = {
        fullName: formData.fullName,
        cnic: formData.cnic,
        email: formData.email,
        volunteerId: Math.floor(100000 + Math.random() * 900000).toString(),
        joinDate: "May 01, 2025", // Static date as per design
      };
      localStorage.setItem("volunteerData", JSON.stringify(userData));

      // Store remember me preference
      if (rememberMe) {
        localStorage.setItem("rememberMe", "true");
      }

      // Redirect to dashboard
      router.push("/pages/dashboard");
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Login failed. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8 border border-gray-100">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800">
            Welcome to
            <br />
            <span className="text-orange-600">Volunteer Login</span>
          </h1>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md text-sm">
            {error}
          </div>
        )}

        {/* Login Form */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-800 placeholder-gray-400"
              placeholder="Enter your full name"
              required
            />
          </div>

          {/* CNIC */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              CNIC
            </label>
            <input
              type="text"
              name="cnic"
              value={formData.cnic}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-800 placeholder-gray-400"
              placeholder="Enter your CNIC (XXXXX-XXXXXXX-X)"
              pattern="[0-9]{5}-[0-9]{7}-[0-9]{1}"
              required
            />
            <p className="mt-1 text-xs text-gray-500">
              Format: XXXXX-XXXXXXX-X
            </p>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-800 placeholder-gray-400"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-800 placeholder-gray-400"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-700"
              >
                Remember me
              </label>
            </div>
            <div className="text-sm">
              <Link
                href="/forgot-password"
                className="font-medium text-orange-600 hover:text-orange-500"
              >
                Forgot Password?
              </Link>
            </div>
          </div>

          {/* Login Button */}
          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Logging in...
                </>
              ) : (
                "Log in"
              )}
            </button>
          </div>
        </form>

        {/* Registration Link */}
        <div className="mt-4 text-center text-sm">
          <p className="text-gray-600">
            Don&apos;t have an account?{" "}
            <Link
              href="/register"
              className="font-medium text-orange-600 hover:text-orange-500"
            >
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default VolunteerLogin;
