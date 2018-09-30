import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import './review-menu.component.css';
import ReviewFeed from '../review-feed/review-feed.container';

import { Container, Grid, Divider, Form, Search,  Header, Segment, Icon, Item, Label, Rating } from 'semantic-ui-react';



import PropTypes from 'prop-types'; 
import { connect } from 'react-redux';

export default class ReviewMenu extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Grid centered columns={1} id="review-sub-menu-container">
      <Menu size='small' borderless>
        <Menu.Item name='latest_reviews' active onClick={this.handleItemClick} />
        <Menu.Item name='local_reviews' active={activeItem === 'local'} onClick={this.handleItemClick} />
      </Menu>
      <ReviewFeed />
      </Grid>
    )
  }
}