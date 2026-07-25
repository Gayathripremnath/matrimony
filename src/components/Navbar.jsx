import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const pages = [
    { name: 'Home', path: '/' },
    { name: 'Search', path: '/search' },
    { name: 'Membership', path: '/membership' },
    { name: 'Register', path: '/registration' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const handleNavClick = () => {
    setIsOpen(false);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <nav className="wn-navbar">
      {/* Left: Brand Logo & Name */}
      <div className="wn-nav-brand">
        <NavLink to="/" className="wn-brand-link">
          <div className="wn-logo-graphic">
            <svg viewBox="0 0 100 60" className="wn-nest-svg">
              <path d="M50 10 C 35 10, 20 25, 10 45 C 25 35, 40 30, 50 30 C 60 30, 75 35, 90 45 C 80 25, 65 10, 50 10 Z" fill="#ffffff" />
              <path d="M15 50 C 35 40, 65 40, 85 50 C 65 55, 35 55, 15 50 Z" fill="#ffffff" />
              <circle cx="50" cy="18" r="6" fill="#ffffff" />
            </svg>
          </div>
          <div className="wn-brand-text">
            <h2>Wed<span className="wn-nest-bold">Nest</span></h2>
            <span className="wn-sub-text">Matrimony</span>
          </div>
        </NavLink>
      </div>

      {/* Hamburger Toggle Button for Mobile */}
      <button className="wn-menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? '✕' : '☰'}
      </button>

      {/* Center: Navigation Links */}
      <ul className={`wn-nav-links ${isOpen ? 'open' : ''}`}>
        {pages.map((page) => (
          <li key={page.path}>
            <NavLink
              to={page.path}
              className={({ isActive }) => (isActive ? 'wn-nav-link wn-active-link' : 'wn-nav-link')}
              onClick={handleNavClick}
            >
              {page.name}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Right: Search Input & Login Button */}
      <div className={`wn-nav-actions ${isOpen ? 'open' : ''}`}>
        <form onSubmit={handleSearchSubmit} className="wn-search-form">
          <span className="wn-search-icon">⌕</span>
          <input 
            type="text" 
            placeholder="Search Profile ID / Keyword" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </form>

        <NavLink to="/login" className="wn-login-btn" onClick={handleNavClick}>
          <span className="wn-login-icon">👤</span> Login
        </NavLink>
      </div>
    </nav>
  );
}