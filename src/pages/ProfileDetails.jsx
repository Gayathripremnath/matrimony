import React from "react";
import { useParams, Link } from "react-router-dom";
import "./ProfileDetails.css";

export default function ProfileDetails() {
  const { id } = useParams();

  // Temporary Dummy Data
  const profile = {
    id: id,
    name: "Anjali Nair",
    age: 24,
    height: "5'4\"",
    religion: "Hindu",
    caste: "Nair",
    education: "MBA",
    profession: "Software Engineer",
    income: "₹8 LPA",
    location: "Kochi, Kerala",
    maritalStatus: "Never Married",
    motherTongue: "Malayalam",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",

    about:
      "I am a simple, caring and family-oriented person. I value honesty, respect and relationships. I love travelling, music and spending quality time with family.",

    family: {
      father: "Business",
      mother: "Homemaker",
      brother: "1 Married Brother",
      sister: "No Sister",
    },

    partnerPreference: {
      age: "24 - 30 Years",
      height: "5'3\" - 6'0\"",
      religion: "Any",
      education: "Graduate / Post Graduate",
      location: "Kerala Preferred",
    },
    id: id,
    name: "Athira ",
    age: 24,
    height: "5'4\"",
    religion: "Hindu",
    caste: "Nair",
    education: "MBA",
    profession: "Software Engineer",
    income: "₹8 LPA",
    location: "Kochi, Kerala",
    maritalStatus: "Never Married",
    motherTongue: "Malayalam",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",

    about:
      "I am a simple, caring and family-oriented person. I value honesty, respect and relationships. I love travelling, music and spending quality time with family.",

    family: {
      father: "Business",
      mother: "Homemaker",
      brother: "1 Married Brother",
      sister: "No Sister",
    },

    partnerPreference: {
      age: "24 - 30 Years",
      height: "5'3\" - 6'0\"",
      religion: "Any",
      education: "Graduate / Post Graduate",
      location: "Kerala Preferred",
    },
  };

  return (
    <div className="profile-details-page">

      <div className="breadcrumb">
        <Link to="/profiles">← Back to Profiles</Link>
      </div>

      <div className="profile-top">

        <div className="profile-image-box">
          <img src={profile.image} alt={profile.name} />
        </div>

        <div className="profile-info">

          <span className="profile-id">{profile.id}</span>

          <h1>{profile.name}</h1>

          <div className="info-grid">

            <div>
              <strong>Age</strong>
              <p>{profile.age} Years</p>
            </div>

            <div>
              <strong>Height</strong>
              <p>{profile.height}</p>
            </div>

            <div>
              <strong>Religion</strong>
              <p>{profile.religion}</p>
            </div>

            <div>
              <strong>Caste</strong>
              <p>{profile.caste}</p>
            </div>

            <div>
              <strong>Education</strong>
              <p>{profile.education}</p>
            </div>

            <div>
              <strong>Profession</strong>
              <p>{profile.profession}</p>
            </div>

            <div>
              <strong>Income</strong>
              <p>{profile.income}</p>
            </div>

            <div>
              <strong>Location</strong>
              <p>{profile.location}</p>
            </div>

            <div>
              <strong>Marital Status</strong>
              <p>{profile.maritalStatus}</p>
            </div>

            <div>
              <strong>Mother Tongue</strong>
              <p>{profile.motherTongue}</p>
            </div>

          </div>

          <div className="profile-buttons">
            <button className="interest-btn">
              ❤️ Express Interest
            </button>

            <button className="shortlist-btn">
              ⭐ Shortlist
            </button>
          </div>

        </div>

      </div>

      <div className="details-section">

        <div className="card">

          <h2>About</h2>

          <p>{profile.about}</p>

        </div>

        <div className="card">

          <h2>Family Details</h2>

          <ul>
            <li><strong>Father :</strong> {profile.family.father}</li>
            <li><strong>Mother :</strong> {profile.family.mother}</li>
            <li><strong>Brother :</strong> {profile.family.brother}</li>
            <li><strong>Sister :</strong> {profile.family.sister}</li>
          </ul>

        </div>

        <div className="card">

          <h2>Partner Preferences</h2>

          <ul>
            <li><strong>Age :</strong> {profile.partnerPreference.age}</li>
            <li><strong>Height :</strong> {profile.partnerPreference.height}</li>
            <li><strong>Religion :</strong> {profile.partnerPreference.religion}</li>
            <li><strong>Education :</strong> {profile.partnerPreference.education}</li>
            <li><strong>Location :</strong> {profile.partnerPreference.location}</li>
          </ul>

        </div>

      </div>

    </div>
  );
}