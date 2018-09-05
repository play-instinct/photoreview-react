import React from 'react';
import { connect } from 'react-redux';
// import './Main.layout.css';
import logo from './img/logo.svg';
import Nav from './_parts/nav/Nav.component';
import SemNav from './_parts/SemNav/SemNav.component';


const Main = props => (
  <div className="App">
  <SemNav></SemNav>
    <div className = "overall-nav">
      <Nav isLoggedIn={props.user.isLoggedIn} username={props.user.username} />
    </div>
    <header className="App-header">
      {props.children}
    </header>
  </div>
)

const mapStateToProps = state => ({
  appState: state.appState,
  user: state.user,
});

export default connect(mapStateToProps)(Main);
