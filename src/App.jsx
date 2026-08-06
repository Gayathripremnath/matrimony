import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Search from './pages/Search';
import Membership from './pages/Membership';
import Registration from './pages/Registration';
import Login from './pages/Login';
import './App.css';
import Contact from './pages/Contact';
import Profiles from './pages/Profile';
import ProfileDetails from './pages/ProfileDetails';
import RegistrationDetails from './pages/RegistrationDetails1';
import RegistrationStep3 from './pages/RegistrationD3';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profiles" element={<Profiles />} />
          <Route path="/profiles/:id" element={<ProfileDetails />} />
          <Route path="/registration-details" element={<RegistrationDetails />} />
          <Route path="/registration-details3" element={<RegistrationStep3 />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}