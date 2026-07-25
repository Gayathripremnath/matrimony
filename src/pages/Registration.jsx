import React from 'react';
import './Registration.css';

export default function Registration() {
  return (
    <div className="registration-page">
      <div className="registration-container">
        <h2>Create Your Matrimony Profile</h2>
        <form onSubmit={(e) => { e.preventDefault(); alert('Registration successful!'); }}>
          <div className="reg-form-group">
            <label>Full Name</label>
            <input type="text" placeholder="Enter your full name" required />
          </div>
          <div className="reg-form-group">
            <label>Registering For</label>
            <select required defaultValue="">
              <option value="" disabled>Select</option>
              <option value="self">Self</option>
              <option value="son">Son</option>
              <option value="daughter">Daughter</option>
              <option value="brother">Brother</option>
              <option value="sister">Sister</option>
            </select>
          </div>
          <div className="reg-form-group">
            <label>Email Address</label>
            <input type="email" placeholder="Enter email" required />
          </div>
          <div className="reg-form-group">
            <label>Mobile Number</label>
            <input type="tel" placeholder="Enter mobile number" required />
          </div>
          <div className="reg-form-group">
            <label>Password</label>
            <input type="password" placeholder="Create a secure password" required />
          </div>
          <button type="submit" className="reg-submit-btn">Register Free</button>
        </form>
      </div>
    </div>
  );
}