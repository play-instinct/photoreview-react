import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import './review-menu.component.css';
import { Field, reduxForm }  from 'redux-form';
import { Container, Table, Grid, Divider, Form, Search,  Header, Segment, Icon, Item, Label, Rating } from 'semantic-ui-react';
import PropTypes from 'prop-types'; 
import { connect } from 'react-redux';
import ReviewFeed from '../review-feed/review-feed.container';

class ReviewMenu extends Component {
  componentDidMount(){

  }

  state = {
    column: null,
    data: {},
    direction: null,
  }


  openDataRow = (e) => {
    console.log('clicked on row');
  }


  handleSort = clickedColumn => () => {
    const { column, data, direction } = this.state
    if (column !== clickedColumn) {
      this.setState({
        column: clickedColumn,
        data: this.sortBy(data, [clickedColumn]),
        direction: 'ascending',
      })
      return
    }
    this.setState({
      data: data.reverse(),
      direction: direction === 'ascending' ? 'descending' : 'ascending',
    })
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state;
    const { column, data, direction } = this.state;
    if (this.props.role != 'user') {
    return (
      <Grid centered columns={1} id="review-sub-menu-container">
        <Menu size='small' borderless>
          <Menu.Item 
          name='your_latest_reviews' 
          active={activeItem === 'your_latest_reviews'}          
          onClick={this.handleItemClick}>
            Unapproved Reviews
          </Menu.Item>
          <Menu.Item 
            name='your_local_reviews' 
            active={activeItem === 'local'} 
            onClick={this.handleItemClick} >
            All Latest Reviews 
          </Menu.Item>
        </Menu>
        <Table celled selectable>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell sorted={column === '' ? direction : null}
              onClick={this.handleSort('')}>
                Photographer
              </Table.HeaderCell>
              <Table.HeaderCell> Rating</Table.HeaderCell>
              <Table.HeaderCell>Submitted By</Table.HeaderCell>
              <Table.HeaderCell>Status</Table.HeaderCell>
              <Table.HeaderCell>Date Submitted</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row onClick={this.openDataRow}>
              <Table.Cell>John</Table.Cell>
              <Table.Cell>No Action</Table.Cell>
              <Table.Cell>None</Table.Cell>
              <Table.Cell>None</Table.Cell>
              <Table.Cell>None</Table.Cell>

            </Table.Row>
          </Table.Body>
        </Table>
        {/* <Menu size='small' borderless>
          <Menu.Item 
          name='your_latest_reviews' 
          active={activeItem === 'your_latest_reviews'}          
          onClick={this.handleItemClick}>
            Unapproved Users
          </Menu.Item>
          <Menu.Item 
            name='your_local_reviews' 
            active={activeItem === 'local'} 
            onClick={this.handleItemClick} >
            All Users
          </Menu.Item>
        </Menu>
         <Table celled selectable>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell sorted={column === '' ? direction : null}
              onClick={this.handleSort('')}>
                Name
              </Table.HeaderCell>
              <Table.HeaderCell>Social Media</Table.HeaderCell>
              <Table.HeaderCell>Status</Table.HeaderCell>
              <Table.HeaderCell>Date Created</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>John</Table.Cell>
              <Table.Cell>No Action</Table.Cell>
              <Table.Cell>None</Table.Cell>
              <Table.Cell>None</Table.Cell>

            </Table.Row>
          </Table.Body>
        </Table> */}
      </Grid>
    )
  }

  else return (
    <Grid centered columns={1} id="review-sub-menu-container">
        <Menu size='small' borderless>
          <Menu.Item name='your_reviews' active onClick={this.handleItemClick} />
          <Menu.Item name='local_reviews' active={activeItem === 'local'} onClick={this.handleItemClick} />
        </Menu>
        <Table celled selectable>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Photographer</Table.HeaderCell>
              <Table.HeaderCell>Rating</Table.HeaderCell>
              <Table.HeaderCell>Status</Table.HeaderCell>
              <Table.HeaderCell>Date Submitted</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>Bill Bob</Table.Cell>
              <Table.Cell>No Action</Table.Cell>
              <Table.Cell>None</Table.Cell>
              <Table.Cell>None</Table.Cell>

            </Table.Row>
          </Table.Body>
        </Table>
      </Grid>
  )
}
}

const mapStateToProps = state => ({
  appState: state.appState,
  user: state.user,
  role: state.user.role
  // photographer: state.photographer,
  // reviews: state.user.reviews
  
});




const connectedReviewMenu = connect(mapStateToProps)(ReviewMenu)

export default reduxForm({
form: 'reviews',
enableReinitialize: true
})(connectedReviewMenu)



