import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'; 
import { Field, reduxForm }  from 'redux-form';
import { Link, Router, Route } from 'react-router-dom';
import { FormInput, fieldValidators} from 'semantic-redux-form-fields';
import { Container, Grid, Divider, Form, Table,  Search,  Header, Segment, Icon, Item, Label, Rating, Modal } from 'semantic-ui-react';
import PhotographerSearch from '../photographer-search/photographer-search.container';
import './dashboard.container.css';
import ReviewFeed from '../review-feed/review-feed.container';
import AdminSearch from '../AdminSearch/AdminSearch.container';
import DashboardHeader from '../dashboard-header/dashboard-header.container';
import ReviewMenu from '../review-menu/review-menu.component';

import {fetchUsers}  from '../../actions';



class DashboardUser extends React.Component {
  componentDidMount(){
    if (this.props.role == "admin") {
      this.props.fetchUsers(); 
    }   
  }

  handleClick(){
    console.log('clicked!')
  }

  render(){
    return (
        <Container grid>
            {this.props.users ?
            <Table celled selectable>
             <Table.Header>
               <Table.Row>
                 <Table.HeaderCell>
                   Nameeeee
                 </Table.HeaderCell>
                 <Table.HeaderCell>Email</Table.HeaderCell>
                 <Table.HeaderCell> Social Media </Table.HeaderCell>
                 <Table.HeaderCell>Date Submitted</Table.HeaderCell>
                 <Table.HeaderCell>Approved</Table.HeaderCell>
               </Table.Row>
             </Table.Header>
             <Table.Body>
            { this.props.users.map(u => 
              <Modal trigger={
                <Table.Row onClick={this.handleClick.bind(this, u)}> 
                <Table.Cell>{u.name}</Table.Cell>
                <Table.Cell>{u.email}</Table.Cell>
                <Table.Cell>{u.social_media}</Table.Cell>
                <Table.Cell>{u.created_at}</Table.Cell>
                <Table.Cell>{ u.isApproved }</Table.Cell>
               </Table.Row>
            }>
                <Modal.Header>{u.email}</Modal.Header>
                <Modal.Content>
                  <Modal.Description>
                    <Header></Header>
                    <p>We've found the following gravatar image associated with your e-mail address.</p>
                    <p>Is it okay to use this photo?</p>
                  </Modal.Description>
                </Modal.Content>
              </Modal>
              )}
             </Table.Body>
           </Table> 
            : 
            <div>couldn't load users.</div> }  
         </Container>

  )

  }
}
    

const mapStatetoProps = state => ({
  role: state.user.role,
  users: state.user.users,
});


export default reduxForm({
  form: 'search-dash'
})(connect(mapStatetoProps, {fetchUsers})(DashboardUser))