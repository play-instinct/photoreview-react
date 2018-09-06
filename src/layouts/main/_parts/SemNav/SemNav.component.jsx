import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './SemNav.layout.css';

import PropTypes from 'prop-types'; 
import logo from './img/photoreview-logo.svg'
import { connect } from 'react-redux';


export default class MenuExampleColored extends Component {
    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
    render() {
      const { activeItem } = this.state
  
      return (
        <Menu fluid widths={4} size='huge' borderless stackable>
          <Menu.Item header className ="logo-header-nav">
           <img src={logo} className="logo"/>
                Hindsight
            </Menu.Item>
          <Menu.Item
            name='about'
            active={activeItem === 'about'}
            onClick={this.handleItemClick}
          />
          <Menu.Item name='terms' active={activeItem === 'terms'} onClick={this.handleItemClick} />
          <Menu.Item
            name='signUp'
            active={activeItem === 'signUp'}
            onClick={this.handleItemClick}
          />
        </Menu>
      )
    }
}
