import React from 'react';
// import logo from './img/photoreview-logo.svg'
import { Link } from 'react-router-dom';
import { Container, Dimmer, Divider } from 'semantic-ui-react';
import { Header } from 'semantic-ui-react';


const About = () => (
  <Container textAlign ="center">
     <Header>About
      {/* <img src={logo} className="logo" id="header-logo"/> */}
    </Header>
    <Header as='h4' id="tagline">Praise a great shoot experience. Stay informed about the bad. </Header>
    <div className="action-container"><Link to="/signup" className="sign-up-btn">Sign Up</Link></div>
  </Container>

 
);

export default About;