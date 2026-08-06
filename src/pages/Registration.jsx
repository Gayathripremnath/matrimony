import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom"; 
import "./Registration.css";

export default function Registration() {
  const navigate = useNavigate();
  const location = useLocation();
  const prefill = location.state || {};

  const [formData, setFormData] = useState({
    name: prefill.name || "",
    gender: prefill.gender || "",
    day: "",  
    month: "",
    year: "",
    maritalStatus: "",
    caste: "",
    email: "",
    password: "",
    source: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    navigate('/registration-details');
  };

  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ];

  const years = [];
  for (let i = 1980; i <= 2010; i++) {
    years.push(i);
  }

  return (
    <>
      {/* Banner */}
      <section className="registration-banner">
        <div className="banner-overlay">
          <h1>Find Your Perfect Match</h1>
          <p>Join thousands of happy couples who found their life partner through Matrimony.</p>
        </div>
      </section>

      {/* Step Progress */}
      <div className="reg-step-bar">
        <div className="reg-step-item">
          <div className="reg-step-circle active">1</div>
          <span className="reg-step-label">Basic Info</span>
        </div>
        <div className="reg-step-line"></div>
        <div className="reg-step-item">
          <div className="reg-step-circle">2</div>
          <span className="reg-step-label">Education</span>
        </div>
        <div className="reg-step-line"></div>
        <div className="reg-step-item">
          <div className="reg-step-circle">3</div>
          <span className="reg-step-label">Family</span>
        </div>
      </div>

      {/* Registration Form */}
      <div className="registration-page">
        <div className="registration-container">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name of Bride/Groom *</label>
              <input
                type="text"
                name="name"
                placeholder="Enter Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Gender *</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
              >
                <option value="">Select Gender</option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>

            <div className="form-group">
              <label>Date of Birth *</label>

              <div className="dob">
                <select
                  name="day"
                  value={formData.day}
                  onChange={handleChange}
                  required
                >
                  <option value="">Day</option>
                  {days.map((day) => (
                    <option key={day}>{day}</option>
                  ))}
                </select>

                <select
                  name="month"
                  value={formData.month}
                  onChange={handleChange}
                  required
                >
                  <option value="">Month</option>
                  {months.map((month) => (
                    <option key={month}>{month}</option>
                  ))}
                </select>

                <select
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                  required
                >
                  <option value="">Year</option>
                  {years.map((year) => (
                    <option key={year}>{year}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-group">
              <label>Marital Status *</label>
              <select
                name="maritalStatus"
                value={formData.maritalStatus}
                onChange={handleChange}
                required
              >
                <option value="">Select</option>
                <option>Unmarried</option>
                <option>Divorced</option>
                <option>Widowed</option>
              </select>
            </div>

            <div className="form-group">
              <label>Caste *</label>
              <select
                name="caste"
                value={formData.caste}
                onChange={handleChange}
                required
              >
                <option value="">Select Caste</option>
                <option>Thiyya</option>
                <option>Nair</option>
                <option>Ezhava</option>
                <option>Brahmin</option>
                <option>Muslim</option>
                <option>Christian</option>
              </select>
            </div>

            <h2>For Matrimony Login</h2>

            <div className="form-group">
              <label>User Email *</label>
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Password *</label>
              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <h2>How did you know about Keralakaramatrimony?</h2>

            <div className="form-group">
              <label>Source *</label>
              <select
                name="source"
                value={formData.source}
                onChange={handleChange}
                required
              >
                <option value="">Select</option>
                <option>Google Search</option>
                <option>Facebook</option>
                <option>Instagram</option>
                <option>Friend</option>
                <option>Advertisement</option>
              </select>
            </div>

            <button type="submit" className="submit-btn">
              ENTER
            </button>
          </form>
        </div>
      </div>
    </>
  );
}