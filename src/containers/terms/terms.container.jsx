import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Dimmer, Divider, Icon } from 'semantic-ui-react';
import { Header } from 'semantic-ui-react';
import './terms.container.css';


const Terms = () => (
  <Container textAlign ="center" id="terms-container">
     <Header icon>
     <Icon name='bullhorn'/>
     Terms of Use
    </Header>
    <Header as='h4' className="terms-h-sub">
        All Hindsight users must agree and abide by the terms listed below. 
    </Header>
    <Header as='h4'  id ="header-terms-bottom" className="terms-h-sub" dividing>
        Failure to abide by these guidelines will result in termination of your account and any subsequent account made.
    </Header>
  </Container>

 
);

export default Terms;