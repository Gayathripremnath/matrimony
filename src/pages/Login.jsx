import React from "react";
import "./Login.css";

export default function Login() {
  return (
    <div className="login-page">

      {/* Banner */}
      <section className="login-banner">
        <div className="login-banner-overlay">
          <h1>Find Your Perfect Life Partner</h1>
          <p>
            Welcome back! Sign in to continue your search for a meaningful
            relationship.
          </p>
        </div>
      </section>

      {/* Login Card */}
      <div className="login-card">
        <div className="login-header">
          <h2>Welcome Back ❤️</h2>
          <p>Login to your account</p>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Login successful!");
          }}
        >
          <div className="form-group">
            <label>Email or Matrimony ID</label>
            <input
              type="text"
              placeholder="Enter email or Matrimony ID"
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              required
            />
          </div>

          <button type="submit" className="submit-btn">
            Login
          </button>

          <div className="login-links">
            <a href="#">Forgot Password?</a>
            <a href="/register">Create Account</a>
          </div>
        </form>
      </div>
    </div>
  );
}