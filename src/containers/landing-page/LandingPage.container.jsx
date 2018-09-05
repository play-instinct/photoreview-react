import React from 'react';
// import logo from './img/logo.svg'
import './LandingPage.container.css';
import { Link } from 'react-router-dom';
const LandingPage = () => (
  <div>
     <header className="app-header">
      {/* <img src={logo} className="logo"/> */}
      <h1 className="app-title">EduRide</h1>
      <hr/>
      <p className="app-intro">
      Landing Page Contaner
      </p>
    </header>
    <div className="action-container"><Link to="/signup" className="sign-up-btn">Sign Up</Link></div>
  </div>
);

export default LandingPage;