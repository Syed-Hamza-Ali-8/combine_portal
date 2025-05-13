"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation"; // Next.js App Router navigation
import "../styles/LoginPage.css"; // Import your CSS styles

interface FormData {
  email: string;
  password: string;
}

// Admin credentials
const ADMIN_CREDENTIALS = {
  email: "admin@example.com",
  password: "adminpass123",
};

const LoginPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const router = useRouter();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError("");
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const { email, password } = formData;

    // Validate credentials
    if (
      email === ADMIN_CREDENTIALS.email &&
      password === ADMIN_CREDENTIALS.password
    ) {
      // Redirect to admin dashboard
      router.push("/admin/dashboard");
    } else {
      setError("Incorrect email or password.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6">Admin Login</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="form-group">
            <label htmlFor="email" className="form-label block text-lg">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-input w-full p-3 border border-gray-300 rounded-lg"
              value={formData.email}
              onChange={handleInputChange}
              required
              aria-label="Email address"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="form-label block text-lg">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-input w-full p-3 border border-gray-300 rounded-lg"
              value={formData.password}
              onChange={handleInputChange}
              required
              aria-label="Password"
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
              className="w-full py-3 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition duration-300 cursor-pointer" 
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
