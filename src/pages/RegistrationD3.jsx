import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./RegistrationD3.css";

export default function RegistrationStep3() {
  const [formData, setFormData] = useState({
    fatherName: "",
    fatherOccupation: "",
    motherName: "",
    motherOccupation: "",
    brothers: "0",
    marriedBrothers: "0",
    sisters: "0",
    marriedSisters: "0",
    financialLevel: "",
    aboutFamily: "",

    place: "",
    houseName: "",
    busStop: "",
    postOffice: "",
    taluk: "",
    village: "",

    contactName: "",
    relationship: "",
    countryCode: "+91",
    phone: "",
    extraPhone: "",
    acceptTerms: false,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    navigate('/login');
  };

  return (
    <>
      {/* Banner */}
      <div className="reg3-banner">
        <div className="reg3-banner-content">
          <h1>Family & Contact Details</h1>
          <p>Almost done! Fill in your family and address details to complete registration.</p>
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
          <div className="reg-step-circle completed">✓</div>
          <span className="reg-step-label">Education</span>
        </div>
        <div className="reg-step-line done"></div>
        <div className="reg-step-item">
          <div className="reg-step-circle active">3</div>
          <span className="reg-step-label">Family</span>
        </div>
      </div>

      <div className="registration3-page">
        <div className="registration3-container">
          <form onSubmit={handleSubmit}>

          {/* Family Details */}

          <h2 className="section-title">Family Details</h2>

          <div className="form-group">
            <label>Father's Name <span>*</span></label>

            <input
              type="text"
              name="fatherName"
              value={formData.fatherName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Father's Status / Occupation <span>*</span></label>

            <input
              type="text"
              name="fatherOccupation"
              value={formData.fatherOccupation}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Mother's Name <span>*</span></label>

            <input
              type="text"
              name="motherName"
              value={formData.motherName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Mother's Status / Occupation <span>*</span></label>

            <input
              type="text"
              name="motherOccupation"
              value={formData.motherOccupation}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>No of Brothers <span>*</span></label>

            <select
              name="brothers"
              value={formData.brothers}
              onChange={handleChange}
            >
              {[0,1,2,3,4,5].map((n)=>(
                <option key={n}>{n}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>No of Brothers Married <span>*</span></label>

            <select
              name="marriedBrothers"
              value={formData.marriedBrothers}
              onChange={handleChange}
            >
              {[0,1,2,3,4,5].map((n)=>(
                <option key={n}>{n}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>No of Sisters <span>*</span></label>

            <select
              name="sisters"
              value={formData.sisters}
              onChange={handleChange}
            >
              {[0,1,2,3,4,5].map((n)=>(
                <option key={n}>{n}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>No of Sisters Married <span>*</span></label>

            <select
              name="marriedSisters"
              value={formData.marriedSisters}
              onChange={handleChange}
            >
              {[0,1,2,3,4,5].map((n)=>(
                <option key={n}>{n}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Family Financial Level <span>*</span></label>

            <select
              name="financialLevel"
              value={formData.financialLevel}
              onChange={handleChange}
            >
              <option value="">--SELECT--</option>
              <option>Middle Class</option>
              <option>Upper Middle Class</option>
              <option>Rich</option>
            </select>
          </div>

          <div className="form-group">
            <label>About You & Family</label>

            <textarea
              rows="4"
              name="aboutFamily"
              placeholder="Maximum 150 words"
              value={formData.aboutFamily}
              onChange={handleChange}
            />
          </div>

          <div className="autofill">
            <label>
              <input type="checkbox" />
              Help me to fill about details (Auto filling)
            </label>
          </div>

          <hr className="section-divider" />
                    {/* Permanent / Native Address */}

          <h2 className="section-title">
            Permanent / Native Address
          </h2>

          <div className="form-group">
            <label>Place <span>*</span></label>

            <select
              name="place"
              value={formData.place}
              onChange={handleChange}
              required
            >
              <option value="">--SELECT--</option>
              <option>Kerala</option>
              <option>Tamil Nadu</option>
              <option>Karnataka</option>
            </select>
          </div>

          <div className="form-group">
            <label>
              House Name / Flat Name & No. <span>*</span>
            </label>

            <input
              type="text"
              name="houseName"
              value={formData.houseName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Place / Bus Stop <span>*</span></label>

            <input
              type="text"
              name="busStop"
              value={formData.busStop}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Post Office / Pin Code <span>*</span></label>

            <input
              type="text"
              name="postOffice"
              value={formData.postOffice}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Taluk <span>*</span></label>

            <select
              name="taluk"
              value={formData.taluk}
              onChange={handleChange}
              required
            >
              <option value="">--SELECT--</option>
              <option>Kozhikode</option>
              <option>Kannur</option>
              <option>Malappuram</option>
              <option>Thrissur</option>
              <option>Ernakulam</option>
            </select>
          </div>

          <div className="form-group">
            <label>Village <span>*</span></label>

            <select
              name="village"
              value={formData.village}
              onChange={handleChange}
              required
            >
              <option value="">--SELECT--</option>
              <option>Village 1</option>
              <option>Village 2</option>
              <option>Village 3</option>
            </select>
          </div>

          <hr className="section-divider" />
                    {/* Contact Details */}

          <h2 className="section-title">
            Contact Details
          </h2>

          <div className="form-group">
            <label>Contact Person Name <span>*</span></label>

            <input
              type="text"
              name="contactName"
              value={formData.contactName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Relationship <span>*</span></label>

            <input
              type="text"
              name="relationship"
              value={formData.relationship}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Phone Number <span>*</span></label>

            <div className="phone-row">
              <select
                name="countryCode"
                value={formData.countryCode}
                onChange={handleChange}
              >
                <option value="+91">🇮🇳 +91</option>
                <option value="+971">🇦🇪 +971</option>
                <option value="+966">🇸🇦 +966</option>
                <option value="+1">🇺🇸 +1</option>
                <option value="+44">🇬🇧 +44</option>
              </select>

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label>Additional Contact Number</label>

            <input
              type="tel"
              name="extraPhone"
              placeholder="Optional"
              value={formData.extraPhone}
              onChange={handleChange}
            />
          </div>

          <div className="checkbox-row">
            <input
              type="checkbox"
              name="acceptTerms"
              checked={formData.acceptTerms}
              onChange={handleChange}
              required
            />

            <label>
              I agree to the
              <a href="#"> Terms &amp; Conditions </a>
              and
              <a href="#"> Privacy Policy</a>.
            </label>
          </div>

          <button
            type="submit"
            className="register-btn"
          >
            REGISTER NOW
          </button>

          </form>
        </div>
      </div>
    </>
  );
}