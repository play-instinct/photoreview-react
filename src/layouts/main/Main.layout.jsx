import React from 'react';
import { connect } from 'react-redux';
// import './Main.layout.css';
import logo from './img/logo.svg';
import Nav from './_parts/nav/Nav.component';
import SemNav from './_parts/SemNav/SemNav.component';
import { Container } from 'semantic-ui-react'



const Main = props => (
  <div className="App">
  <Container>
  <SemNav></SemNav>
    <Container className="App-header">
      {props.children}
    </Container>
    <div className = "overall-nav">
      <Nav isLoggedIn={props.user.isLoggedIn} username={props.user.username} />
    </div>
  </Container>
  </div>
)


const mapStateToProps = state => ({
  appState: state.appState,
  user: state.user,
});

export default connect(mapStateToProps)(Main);