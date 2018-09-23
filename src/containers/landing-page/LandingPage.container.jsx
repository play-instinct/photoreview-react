import React from 'react';
import logo from './img/photoreview-logo.svg'
import './LandingPage.container.css';
import { Link } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import { Header } from 'semantic-ui-react';


const LandingPage = () => (
  <Container textAlign ="center">
     <Header>
      <img src={logo} className="logo" id="header-logo"/>
    </Header>
    <Header as='h2' id="tagline">Praise a great shoot experience. Stay informed about the bad. </Header>
    <div className="action-container"><Link to="/signup" className="sign-up-btn">Sign Up</Link></div>
  </Container>

 
);

export default LandingPage;