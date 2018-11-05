import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import PropTypes from 'prop-types'; 
import { Field, reduxForm }  from 'redux-form';
import { Link, Router, Route, history } from 'react-router-dom';
import {  browserHistory, withRouter } from 'react-router-dom';

import { FormInput, fieldValidators} from 'semantic-redux-form-fields';
import { Container, Grid, Divider, Form, Table,  Search,  Header, Segment, Icon, Item, Label, Rating } from 'semantic-ui-react';
import PhotographerSearch from '../photographer-search/photographer-search.container';
import './dashboard.container.css';
import ReviewFeed from '../review-feed/review-feed.container';
import AdminSearch from '../AdminSearch/AdminSearch.container';
import DashboardHeader from '../dashboard-header/dashboard-header.container';
import ReviewMenu from '../review-menu/review-menu.component';

import {fetchAllReviews}  from '../../actions';



class DashboardReview extends React.Component {
  componentDidMount(){
    if (this.props.role == "admin") {
      this.props.fetchAllReviews(); 
    }
      
  }

  handleClick(u){
    this.props.dispatch(push(`/review-result/${u._id}`));
  }

  render(){
    return (
        <Container grid className="dashboard-container-admin">
            {this.props.reviews ?
            <Table celled selectable>
             <Table.Header>
               <Table.Row>
                 <Table.HeaderCell>
                   Submitted By
                 </Table.HeaderCell>
                 <Table.HeaderCell>Photographer</Table.HeaderCell>
                 <Table.HeaderCell> Rating </Table.HeaderCell>
                 <Table.HeaderCell>Date Submitted</Table.HeaderCell>
                 <Table.HeaderCell>Status</Table.HeaderCell>
               </Table.Row>
             </Table.Header>
             <Table.Body>
                {this.props.reviews.map(u =>
                  <Table.Row  onClick={this.handleClick.bind(this, u)}> 
                        <Table.Cell>{u.author}</Table.Cell>
                        <Table.Cell>{u.email}</Table.Cell>
                        <Table.Cell>
                        {u.starRating}
                        <Rating icon='star' defaultRating={u.starRating} maxRating={5} size='small'/>

                        </Table.Cell>
                        <Table.Cell>{u.createdAt}</Table.Cell>
                        <Table.Cell>{u.status}</Table.Cell>
                  </Table.Row>          
               )}
            
             </Table.Body>
           </Table> 
            : 
            <div>couldn't load reviews.</div> }  
         </Container>

  )

  }
}
    

const mapStatetoProps = state => ({
  role: state.user.role,
  reviews: state.review.reviews,
});


export default reduxForm({
  form: 'reviews-dash'
})(connect(mapStatetoProps, {fetchAllReviews})(DashboardReview))