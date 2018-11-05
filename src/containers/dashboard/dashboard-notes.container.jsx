import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'; 
import { Field, reduxForm }  from 'redux-form';
import { Link, Router, Route } from 'react-router-dom';
import { FormInput, fieldValidators} from 'semantic-redux-form-fields';
import { Container, Grid, Divider, Form, Table,  Search,  Header, Segment, Icon, Item, Label, Rating } from 'semantic-ui-react';
import PhotographerSearch from '../photographer-search/photographer-search.container';
import './dashboard.container.css';
import ReviewFeed from '../review-feed/review-feed.container';
import AdminSearch from '../AdminSearch/AdminSearch.container';
import DashboardHeader from '../dashboard-header/dashboard-header.container';
import ReviewMenu from '../review-menu/review-menu.component';

import {fetchAllNotes}  from '../../actions';



class DashboardNote extends React.Component {
  componentDidMount(){
    if (this.props.role == "admin") {
      this.props.fetchAlNotes(); 
    }
      
  }

  render(){
    return (
        <Container>
            {this.props.notes ?
            <Table celled selectable>
             <Table.Header>
               <Table.Row>
                 <Table.HeaderCell>
                   Name
                 </Table.HeaderCell>
                 <Table.HeaderCell>Email</Table.HeaderCell>
                 <Table.HeaderCell> Social Media </Table.HeaderCell>
                 <Table.HeaderCell>Date Submitted</Table.HeaderCell>
                 <Table.HeaderCell>Status</Table.HeaderCell>
               </Table.Row>
             </Table.Header>
             <Table.Body>
               
                {/* {this.props.reviews.map(u => <div>u.email</div>)} */}
                <Table.Row onClick={this.openDataRow}> 
                    <Table.Cell>u.name</Table.Cell>
                    <Table.Cell>u.email</Table.Cell>
                    <Table.Cell>u.social_media</Table.Cell>
                    <Table.Cell>u.created_at</Table.Cell>
                    <Table.Cell>u.role</Table.Cell>
               </Table.Row>
            
             </Table.Body>
           </Table> 
            : 
            <div>couldn't load notes.</div> }  
         </Container>

  )

  }
}
    

const mapStatetoProps = state => ({
  role: state.user.role,
  notes: state.review.notes,
});


export default reduxForm({
  form: 'reviews-dash'
})(connect(mapStatetoProps, {fetchAllNotes})(DashboardNote))