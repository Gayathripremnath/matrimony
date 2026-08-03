import React from 'react';
import './Registration.css';

export default function Registration() {
  return (
    <>
      {/* Banner */}
      <section className="reg-banner">
        <div className="reg-banner-content">
          <span className="reg-tag">Join Our Matrimony</span>
          <h1>Find Your Perfect Life Partner</h1>
          <p>Create your free profile and connect with thousands of verified profiles.</p>
          <a href="#register-form" className="reg-banner-btn">Register Now ↓</a>
        </div>
      </section>

      {/* Form */}
      <div className="reg-page">
        <div className="reg-container" id="register-form">
          <h2>Create Your Matrimony Profile</h2>
          <form onSubmit={(e) => { e.preventDefault(); alert('Registration successful!'); }}>
            <div className="reg-form-row">
              <div className="reg-form-group">
                <label>Full Name</label>
                <input type="text" placeholder="Enter your full name" required />
              </div>
              <div className="reg-form-group">
                <label>Registering For</label>
                <select required defaultValue="">
                  <option value="" disabled>Select</option>
                  <option>Self</option>
                  <option>Son</option>
                  <option>Daughter</option>
                  <option>Brother</option>
                  <option>Sister</option>
                </select>
              </div>
            </div>
            <div className="reg-form-row">
              <div className="reg-form-group">
                <label>Email Address</label>
                <input type="email" placeholder="Enter email" required />
              </div>
              <div className="reg-form-group">
                <label>Mobile Number</label>
                <input type="tel" placeholder="Enter mobile number" required />
              </div>
            </div>
            <div className="reg-form-group">
              <label>Password</label>
              <input type="password" placeholder="Create a secure password" required />
            </div>
            <button type="submit" className="reg-submit-btn">Register Free</button>
          </form>
        </div>
      </div>

      {/* How It Works */}
      <div className="reg-how-section">
        <div className="reg-how-top">
          <h2>How It Works</h2>
          <p className="reg-sub">Find your partner in 3 simple steps</p>
        </div>
        <div className="reg-how-bottom">
          <div className="reg-steps">
            {[
              { step: "01", icon: "👤", title: "Create Profile", desc: "Register for free and build your detailed matrimony profile in minutes." },
              { step: "02", icon: "🔍", title: "Search & Match", desc: "Browse thousands of verified profiles and find your perfect match." },
              { step: "03", icon: "💍", title: "Connect & Marry", desc: "Connect directly, meet in person, and begin your happily ever after." },
            ].map(s => (
              <div className="reg-step-card" key={s.step}>
                <div className="reg-step-num">{s.step}</div>
                <div className="reg-step-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Image + Benefits */}
      <div className="reg-benefits-section">
        <div className="reg-benefits-img">
          <img src="https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80" alt="Happy Couple" />
          <div className="reg-img-badge">
            <span>10,000+</span>
            <small>Happy Couples</small>
          </div>
        </div>
        <div className="reg-benefits-text">
          <h2>Why Register With Us?</h2>
          <p>Join India's most trusted matrimony platform and find your soulmate today.</p>
          {[
            "100% Free Registration",
            "Verified & Trusted Profiles",
            "Advanced Privacy Controls",
            "AI-Powered Smart Matching",
            "Dedicated Support Team",
            "Horoscope & Compatibility Match",
          ].map(b => (
            <div className="reg-benefit-item" key={b}>
              <span className="reg-check">✓</span> {b}
            </div>
          ))}
        </div>
      </div>

      {/* Community Banner */}
      <div className="reg-community-banner">
        <div className="reg-community-content">
          <h2>Join 5 Lakh+ Happy Families</h2>
          <p>Your perfect partner is just a profile away. Start your journey today.</p>
          <a href="#register-form" className="reg-community-btn">Create Free Profile</a>
        </div>
        <div className="reg-community-imgs">
          {[
            "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=200&q=80",
            "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=200&q=80",
            "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=200&q=80",
          ].map((src, i) => (
            <img key={i} src={src} alt="couple" />
          ))}
        </div>
      </div>
    </>
  );
}
