import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'; 
import logo from './img/logo.svg'
import { connect } from 'react-redux';


class Nav extends React.Component {
  render() {  
    if (this.props.isLoggedIn) {
      return (
        <nav className="navbar navbar-default">
      <div className="container-all">
          <div className="navbar-menu-container">
          <ul className="navigation">
            <li className="login-link">
              <Link to="/"><img src={logo} className="logo"/></Link>
              </li>
          </ul>
           
          </div>
          <div className="navbar-menu-container">
          <ul className="navigation">
            <li className="login-link">
              <Link to="/dashboard" className="main">Dashboard</Link>
            </li>
          </ul>
          </div>
          <div className="navbar-menu-container">
            <ul className="navigation">
            <li className="login-link">
              <Link to="/dashboard" className="main">Settings</Link>
            </li>
            </ul>
          </div>
      </div>
    </nav>
      )
      
      } 
    else return (
      <nav className="navbar navbar-default">
      <div className="container-all">
          <div className="navbar-header">
          <ul className="navigation">
              {/* <Link to="/"><img src={logo} className="logo"/>TBD</Link></li> */}
          </ul>
           
          </div>
          <div className="navbar-menu-container">
          <ul className="navigation">
            <li className="login-link">
            <Link to="/login" className="main">Login</Link>
            </li>
          </ul>
          </div>
          <div className="navbar-menu-container">
            <ul className="navigation">
            <li className="login-link">
              <a className="main" href="#url">About</a>
            </li>
            </ul>
          </div>
      </div>
    </nav>
    );
  }
}


export default Nav;