import React from 'react';
import './Membership.css';

export default function Membership() {
  return (
    <div className="membership-page">
      <div className="membership-container">
        <h2>Upgrade Your Membership Plan</h2>
        <p className="membership-subtitle">Unlock direct contact numbers, unlimited messaging, and priority listing.</p>
        
        <div className="membership-plans-grid">
          <div className="plan-card">
            <div>
              <h3>Free Plan</h3>
              <div className="plan-price">₹0</div>
              <div className="plan-features">
                <p>✓ Create Profile</p>
                <p>✓ View Matches</p>
                <p>✗ Send Messages</p>
              </div>
            </div>
            <button className="plan-current-btn">Current Plan</button>
          </div>

          <div className="plan-card plan-card-featured">
            <div>
              <h3>Gold Plan</h3>
              <div className="plan-price">₹2,999</div>
              <div className="plan-features">
                <p>✓ View 50 Contact Numbers</p>
                <p>✓ Unlimited Messaging</p>
                <p>✓ Highlight Profile</p>
              </div>
            </div>
            <button className="plan-submit-btn">Choose Gold</button>
          </div>

          <div className="plan-card">
            <div>
              <h3>Diamond Plan</h3>
              <div className="plan-price">₹4,999</div>
              <div className="plan-features">
                <p>✓ Unlimited Contacts</p>
                <p>✓ Dedicated Relationship Manager</p>
                <p>✓ Top Priority Search Placement</p>
              </div>
            </div>
            <button className="plan-submit-btn">Choose Diamond</button>
          </div>
        </div>
      </div>
    </div>
  );
}