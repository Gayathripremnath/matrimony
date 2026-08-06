import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./RegistrationDetails1.css";

export default function RegistrationDetails() {
  const [formData, setFormData] = useState({
    educationLevel: "",
    education: "",
    highestEducation: "",
    occupationLevel: "",
    occupation: "",
    annualIncome: "",
    workLocation: "",
    workingPlace: "",
    height: "",
    disability: "No",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    navigate('/registration-details3');
  };

  return (
    <>
      {/* Banner */}
      <div className="details-banner">
        <div className="details-banner-content">
          <h1>Education & Occupation Details</h1>
          <p>Tell us more about your background to find the best match.</p>
        </div>
      </div>

      {/* Step Progress */}
      <div className="reg-step-bar">
        <div className="reg-step-item">
          <div className="reg-step-circle completed">✓</div>
          <span className="reg-step-label">Basic Info</span>
        </div>
        <div className="reg-step-line done"></div>
        <div className="reg-step-item">
          <div className="reg-step-circle active">2</div>
          <span className="reg-step-label">Education</span>
        </div>
        <div className="reg-step-line"></div>
        <div className="reg-step-item">
          <div className="reg-step-circle">3</div>
          <span className="reg-step-label">Family</span>
        </div>
      </div>

      <div className="details-page">
        <div className="details-container">
        <form onSubmit={handleSubmit}>

          <h2>Education Details</h2>

          <div className="form-group">
            <label>Education Level *</label>
            <select
              name="educationLevel"
              value={formData.educationLevel}
              onChange={handleChange}
            >
              <option>Select Highest Education Level</option>
              <option>SSLC</option>
              <option>Plus Two</option>
              <option>Diploma</option>
              <option>Degree</option>
              <option>PG</option>
            </select>
          </div>

          <div className="form-group">
            <label>Education *</label>
            <select
              name="education"
              value={formData.education}
              onChange={handleChange}
            >
              <option>Select</option>
              <option>B.Com</option>
              <option>B.Sc</option>
              <option>B.Tech</option>
              <option>M.Com</option>
              <option>MBA</option>
            </select>
          </div>

          <div className="form-group">
            <label>Highest Education *</label>
            <textarea
              rows="3"
              name="highestEducation"
              placeholder="Type highest education"
              value={formData.highestEducation}
              onChange={handleChange}
            />
          </div>

          <hr />

          <h2>Occupation Details</h2>

          <div className="form-group">
            <label>Occupation Level *</label>
            <select
              name="occupationLevel"
              value={formData.occupationLevel}
              onChange={handleChange}
            >
              <option>Select</option>
              <option>Government</option>
              <option>Private</option>
              <option>Business</option>
              <option>Self Employed</option>
            </select>
          </div>

          <div className="form-group">
            <label>Occupation *</label>
            <textarea
              rows="2"
              name="occupation"
              placeholder="Type Occupation"
              value={formData.occupation}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Annual Income *</label>
            <select
              name="annualIncome"
              value={formData.annualIncome}
              onChange={handleChange}
            >
              <option>Select</option>
              <option>Below 2 Lakhs</option>
              <option>2-5 Lakhs</option>
              <option>5-10 Lakhs</option>
              <option>Above 10 Lakhs</option>
            </select>
          </div>

          <div className="form-group">
            <label>Working District/State *</label>
            <input
              type="text"
              name="workLocation"
              placeholder="District / State / Country"
              value={formData.workLocation}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Working Place *</label>
            <input
              type="text"
              name="workingPlace"
              placeholder="Working Place"
              value={formData.workingPlace}
              onChange={handleChange}
            />
          </div>

          <hr />

          <h2>Physical Details</h2>

          <div className="form-group">
            <label>Height *</label>
            <select
              name="height"
              value={formData.height}
              onChange={handleChange}
            >
              <option>Select Height</option>
              <option>5'0"</option>
              <option>5'2"</option>
              <option>5'4"</option>
              <option>5'6"</option>
              <option>5'8"</option>
              <option>6'0"</option>
            </select>
          </div>

          <div className="form-group">
            <label>Physical Disability *</label>

            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="disability"
                  value="Yes"
                  checked={formData.disability === "Yes"}
                  onChange={handleChange}
                />
                Yes
              </label>

              <label>
                <input
                  type="radio"
                  name="disability"
                  value="No"
                  checked={formData.disability === "No"}
                  onChange={handleChange}
                />
                No
              </label>
            </div>
          </div>

          <button className="submit-btn">
            COMPLETE REGISTRATION
          </button>

        </form>
        </div>
      </div>
    </>
  );
}