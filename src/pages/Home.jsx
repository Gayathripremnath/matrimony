import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const sliderContent = [
  {
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1600&q=80',
    title: <>Trust Begins With<br />Verified Malayali<br />Profiles</>,
    description: 'Experience Matchmaking With Confidence Through Our Verified Malayali Profiles. Each Profile is Validated to Ensure Real, Reliable, and Serious Connections For Your Perfect Life Partner'
  },
  {
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=80',
    title: <>Find Your Perfect<br />Match With<br />Complete Security</>,
    description: 'Browse through thousands of active, hand-screened profiles with advanced privacy controls and secure communication channels designed for your peace of mind.'
  },
  {
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1600&q=80',
    title: <>Begin Your Happy<br />Lifelong Journey<br />With Us</>,
    description: 'Join a community built on authentic relationships, traditional values, and intelligent matchmaking algorithms tailored to your exact life preferences.'
  }
];

const dummyProfiles = [
  { id: 1, name: 'Ananya Sharma', age: 25, profession: 'Software Engineer', location: 'Bangalore', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80' },
  { id: 2, name: 'Rahul Verma', age: 28, profession: 'Investment Banker', location: 'Mumbai', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80' },
  { id: 3, name: 'Priya Nair', age: 26, profession: 'Doctor', location: 'Kochi', img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=500&q=80' },
  { id: 4, name: 'Karthik Menon', age: 29, profession: 'Architect', location: 'Chennai', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80' },
  { id: 5, name: 'Sneha Patel', age: 24, profession: 'UX Designer', location: 'Pune', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&q=80' },
  { id: 1, name: 'Ananya Sharma', age: 25, profession: 'Software Engineer', location: 'Bangalore', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80' },
  { id: 2, name: 'Rahul Verma', age: 28, profession: 'Investment Banker', location: 'Mumbai', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80' },
  { id: 3, name: 'Priya Nair', age: 26, profession: 'Doctor', location: 'Kochi', img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=500&q=80' },
  { id: 4, name: 'Karthik Menon', age: 29, profession: 'Architect', location: 'Chennai', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80' },
  { id: 5, name: 'Sneha Patel', age: 24, profession: 'UX Designer', location: 'Pune', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&q=80' },
  { id: 1, name: 'Ananya Sharma', age: 25, profession: 'Software Engineer', location: 'Bangalore', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80' },
  { id: 2, name: 'Rahul Verma', age: 28, profession: 'Investment Banker', location: 'Mumbai', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80' },
  { id: 3, name: 'Priya Nair', age: 26, profession: 'Doctor', location: 'Kochi', img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=500&q=80' },
  { id: 4, name: 'Karthik Menon', age: 29, profession: 'Architect', location: 'Chennai', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80' },
  { id: 5, name: 'Sneha Patel', age: 24, profession: 'UX Designer', location: 'Pune', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&q=80' },
  { id: 1, name: 'Ananya Sharma', age: 25, profession: 'Software Engineer', location: 'Bangalore', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80' },
  { id: 2, name: 'Rahul Verma', age: 28, profession: 'Investment Banker', location: 'Mumbai', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80' },
  { id: 3, name: 'Priya Nair', age: 26, profession: 'Doctor', location: 'Kochi', img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=500&q=80' },
  { id: 4, name: 'Karthik Menon', age: 29, profession: 'Architect', location: 'Chennai', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80' },
  { id: 5, name: 'Sneha Patel', age: 24, profession: 'UX Designer', location: 'Pune', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&q=80' },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [gender, setGender] = useState('male');
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderContent.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    alert('Quick registration submitted successfully!');
    navigate('/search');
  };

  return (
    <div>
      <div 
        className="hero-slider" 
        style={{ backgroundImage: `url(${sliderContent[currentSlide].image})` }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content-wrapper">
          
          {/* Dynamic Hero Content that changes with the background */}
          <div className="hero-text-side">
            <h1>
              {sliderContent[currentSlide].title}
            </h1>
            <p>
              {sliderContent[currentSlide].description}
            </p>
          </div>

          {/* Styled Quick Registration Form */}
          <div className="hero-form-card">
            <div className="hero-form-header">
              <h3>Find Your Partner From <span className="highlight-text">2 Lakh+</span> Profiles</h3>
              {/* <p>100% Free matrimonial services</p> */}
            </div>
<form onSubmit={handleRegisterSubmit}>
  <div className="hero-form-row">
    <div className="hero-input-wrapper">
      <input type="text" placeholder="Full Name" required />
    </div>
    <div className="phone-input-group">
      <span className="country-code">🇮🇳 +91</span>
      <input type="tel" placeholder="Mobile Number" required />
    </div>
  </div>

  <div className="hero-form-row">
    <div
      className={`gender-option ${gender === 'male' ? 'active' : ''}`}
      onClick={() => setGender('male')}
    >
      <span>👤</span> Male
    </div>

    <div
      className={`gender-option ${gender === 'female' ? 'active' : ''}`}
      onClick={() => setGender('female')}
    >
      <span>👤</span> Female
    </div>

    <div className="hero-input-wrapper">
      <select defaultValue="" required>
        <option value="" disabled>Age</option>
        <option value="20-25">20 - 25 Years</option>
        <option value="25-30">25 - 30 Years</option>
        <option value="30-35">30 - 35 Years</option>
      </select>
    </div>
    
  </div>

  <div className="terms-row">
    <input type="checkbox" id="terms" required />
    <label htmlFor="terms">
      I have read and agree to the <a href="#terms">Terms of Use</a> &{" "}
      <a href="#privacy">Privacy Policy</a>
    </label>
  </div>
    
  <button type="submit" className="hero-register-btn" href="/register">
    Register Free
  </button>

  <div className="hero-form-footer">
    <span>🎧 Support</span>
    <span>💬 Chat for assistance</span>
  </div>
</form>
          </div>
        </div>
      </div>

      <div className="section-container">
        <h2 className="section-title">Featured Matches</h2>
        <p className="section-subtitle">Handpicked potential profiles matching high compatibility standards</p>
        
        <div className="profiles-grid">
          {dummyProfiles.map((profile) => (
            <div key={profile.id} className="profile-card">
              <img src={profile.img} alt={profile.name} className="profile-img" />
              <div className="profile-info">
                <h3>{profile.name}</h3>
                <p>{profile.age} yrs, {profile.profession}</p>
                <p>{profile.location}</p>
                <button 
                  className="view-profile-btn" 
                  onClick={() => alert(`Connect request sent to ${profile.name}!`)}
                >
                  Connect Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="features-section">
        <h2 className="section-title" style={{ marginBottom: '1rem' }}>Why Choose WedNest?</h2>
        <p className="section-subtitle">We guarantee security and trusted matches for a lifelong commitment.</p>
        
        <div className="features-grid">
          <div className="feature-box">
            <h3>100% Verified</h3>
            <p>Every single profile is manually screened and verified via government ID checks.</p>
          </div>
          <div className="feature-box">
            <h3>Privacy Control</h3>
            <p>Keep your contact details hidden. Share photos and info only with those you trust.</p>
          </div>
          <div className="feature-box">
            <h3>Smart Matchmaking</h3>
            <p>Our intelligent algorithm matches preferences for horoscope, profession, and lifestyle.</p>
          </div>
        </div>
      </div>
    </div>
  );
}   