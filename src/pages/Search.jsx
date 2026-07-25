import React from 'react';
import './Search.css';

export default function Search() {
  return (
    <div className="search-page-wrapper">
      <div className="search-card-container">
        <h2>Advanced Profile Search</h2>
        <form onSubmit={(e) => { e.preventDefault(); alert('Search filter applied!'); }}>
          <div className="search-field-group">
            <label>Age Range</label>
            <div className="search-age-wrapper">
              <input type="number" placeholder="Min Age" min="18" max="70" />
              <input type="number" placeholder="Max Age" min="18" max="70" />
            </div>
          </div>
          {/* <div className="search-field-group">
            <label>Religion</label>
            <select defaultValue="any">
              <option value="any">Any Religion</option>
              <option value="hindu">Hindu</option>
              <option value="christian">Christian</option>
              <option value="muslim">Muslim</option>
              <option value="sikh">Sikh</option>
            </select>
          </div> */}
          <div className="search-field-group">
            <label>Profession</label>
            <input type="text" placeholder="e.g. Software Engineer, Doctor, Teacher" />
          </div>
          <div className="search-field-group">
            <label>Location / City</label>
            <input type="text" placeholder="e.g. Bangalore, Mumbai, Kochi" />
          </div>
          <button type="submit" className="search-action-btn">Find Matches</button>
        </form>
      </div>
    </div>
  );
}