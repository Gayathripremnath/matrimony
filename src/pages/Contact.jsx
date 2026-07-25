import React, { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    setSubmitted(true);
  };

  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Get in Touch With Us</h1>
        <p>Have questions about profiles, memberships, or assistance? We are here to help you 24/7.</p>
      </div>

      <div className="contact-container">
        {/* Contact Info Cards */}
        <div className="contact-info-side">
          <div className="info-card">
            <div className="info-icon">📍</div>
            <div>
              <h3>Our Headquarters</h3>
              <p>MG Road, Near Jos Junction, Ernakulam, Kochi, Kerala 682016</p>
            </div>
          </div>

          <div className="info-card">
            <div className="info-icon">📞</div>
            <div>
              <h3>Phone Support</h3>
              <p>+91 (000) 235-0000</p>
              <p>+91 90000 10005 (Toll Free)</p>
            </div>
          </div>

          <div className="info-card">
            <div className="info-icon">✉️</div>
            <div>
              <h3>Email Address</h3>
              <p>info@wednest.com</p>
              <p>help@wednest.com</p>
            </div>
          </div>

          <div className="info-card">
            <div className="info-icon">⏰</div>
            <div>
              <h3>Working Hours</h3>
              <p>Monday - Saturday: 9:00 AM - 8:00 PM</p>
              <p>Sunday: 10:00 AM - 4:00 PM</p>
            </div>
          </div>
        </div>

        {/* Contact Message Form */}
        <div className="contact-form-side">
          <h2>Send Us a Message</h2>
          <p>Fill out the form below and our customer support team will get back to you shortly.</p>

          {submitted ? (
            <div className="success-message">
              <h3>Thank You, {formData.name}!</h3>
              <p>Your message has been received. Our support team will contact you soon.</p>
              <button 
                className="reset-btn" 
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
                }}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Full Name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                />
              </div>

              <div className="form-row">
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Email Address" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                />
                <input 
                  type="tel" 
                  name="phone" 
                  placeholder="Mobile Number" 
                  value={formData.phone} 
                  onChange={handleChange} 
                  required 
                />
              </div>

              <div className="form-group">
                <input 
                  type="text" 
                  name="subject" 
                  placeholder="Subject / Query Type (e.g. Membership, Verification)" 
                  value={formData.subject} 
                  onChange={handleChange} 
                  required 
                />
              </div>

              <div className="form-group">
                <textarea 
                  name="message" 
                  rows="5" 
                  placeholder="Write your message here..." 
                  value={formData.message} 
                  onChange={handleChange} 
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}