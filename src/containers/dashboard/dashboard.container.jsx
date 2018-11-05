import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'; 
import { Field, reduxForm }  from 'redux-form';
import { Link, Router, Route } from 'react-router-dom';
import { FormInput, fieldValidators} from 'semantic-redux-form-fields';
import { Container, Grid, Divider, Form, Search,  Header, Segment, Icon, Item, Label, Rating } from 'semantic-ui-react';
import PhotographerSearch from '../photographer-search/photographer-search.container';
import './dashboard.container.css';
import ReviewFeed from '../review-feed/review-feed.container';
import AdminSearch from '../AdminSearch/AdminSearch.container';
import DashboardHeader from '../dashboard-header/dashboard-header.container';
import ReviewMenu from '../review-menu/review-menu.component';
import DashboardUser from './dashboard-user.container'
import DashboardReview from './dashboard-reviews.container'
import {fetchUsers}  from '../../actions';



class Dashboard extends React.Component {
  componentDidMount(){
    if (this.props.role == "admin") {
      this.props.fetchUsers();
    }
    // else this.props.fetchUser();
  }

  render(){
    return (
    <Container> 
      <DashboardHeader/>
      <Route path={`${this.props.match.url}/reviews`} component={DashboardReview  } /> 
      <Route path= {`${this.props.match.url}/users`} component={ DashboardUser  } />
      {/* <ReviewMenu/> */}

    </Container>

  )

  }
}
    

const mapStatetoProps = state => ({
  role: state.user.role
});


export default reduxForm({
  form: 'search-dash'
})(connect(mapStatetoProps, {fetchUsers})(Dashboard))