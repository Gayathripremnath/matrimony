import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="eb-footer">
      <div className="eb-footer-content">
        <div className="eb-footer-section">
          <h4>EternalBonds</h4>
          <p>Finding your soulmate is now easier, safer, and faster with our verified matrimony platform.</p>
        </div>
        <div className="eb-footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact Support</a></li>
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#terms">Terms of Service</a></li>
          </ul>
        </div>
        <div className="eb-footer-section">
          <h4>Matched Regions</h4>
          <ul>
            <li><a href="#north">North India</a></li>
            <li><a href="#south">South India</a></li>
            <li><a href="#nri">NRI Matches</a></li>
            <li><a href="#global">Global Profiles</a></li>
          </ul>
        </div>
      </div>
      <div className="eb-footer-bottom">
        <p>&copy; 2026 EternalBonds Matrimony. All Rights Reserved.</p>
      </div>
    </footer>
  );
}