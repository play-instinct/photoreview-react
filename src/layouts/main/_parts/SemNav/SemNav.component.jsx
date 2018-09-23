import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './SemNav.layout.css';

import PropTypes from 'prop-types'; 
import logo from './img/photoreview-logo.svg'
import { connect } from 'react-redux';



class SemNav extends React.Component {
    render() {
    if (this.props.isLoggedIn) { 
        return (
          <Menu fluid widths={5} size='huge' borderless stackable id="main-menu">
          <Menu.Item className ="logo-header-nav">
          <Link to="/"><img src={logo} className="logo"/></Link>

            </Menu.Item>
            <Menu.Item>
            <Link to="/review" className="main">Submit Review</Link>
          </Menu.Item>
            <Menu.Item>
            <Link to="/photographer-search" className="main">Photographer Search</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/dashboard" className="main">Dashboard</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/terms" className="main">Terms</Link>
          </Menu.Item>
        </Menu>
      )
    }
    else return (            
      <Menu fluid widths={5} size='huge' borderless stackable id="main-menu">
      <Menu.Item className ="logo-header-nav">

          <Link to="/">HindSight</Link>
        </Menu.Item>
        <Menu.Item>
        <Link to="/about" className="main">About</Link>
      </Menu.Item>
        <Menu.Item>
        <Link to="/terms" className="main">Terms</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/signup" className="main">Sign Up</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/login" className="main">Login</Link>
      </Menu.Item>
    </Menu>
    )
  
    }
}


export default SemNav;