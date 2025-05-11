"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
import "../styles/LoginPage.css";

interface FormData {
  email: string;
  password: string;
}

// Trustee credentials (you can update as needed)
const TRUSTEE_CREDENTIALS = {
  email: "trustee@example.com",
  password: "trusteepass123",
};

const TrusteeLoginPage: React.FC = () => {
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

    if (
      email === TRUSTEE_CREDENTIALS.email &&
      password === TRUSTEE_CREDENTIALS.password
    ) {
      router.push("/trustee/dashboard");
    } else {
      setError("Incorrect email or password.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="login-title">Trustee Login</h1>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-input"
              value={formData.email}
              onChange={handleInputChange}
              required
              aria-label="Email address"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-input"
              value={formData.password}
              onChange={handleInputChange}
              required
              aria-label="Password"
            />
          </div>
          {error && <p className="error-text">{error}</p>}
          <button type="submit" className="login-button">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default TrusteeLoginPage;
