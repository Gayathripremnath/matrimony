import React from 'react';

export default function Login() {
  return (
    <div className="inner-page" style={{ maxWidth: '500px' }}>
      <h2>Welcome Back</h2>
      <form onSubmit={(e) => { e.preventDefault(); alert('Login successful!'); }}>
        <div className="form-group">
          <label>Email or Matrimony ID</label>
          <input type="text" placeholder="Enter email or ID" required />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" placeholder="Enter password" required />
        </div>
        <button type="submit" className="submit-btn">Login</button>
      </form>
    </div>
  );
}