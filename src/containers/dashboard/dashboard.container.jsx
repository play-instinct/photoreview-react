import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'; 
import { Field, reduxForm }  from 'redux-form';
import { Link } from 'react-router-dom';
import { FormInput, fieldValidators} from 'semantic-redux-form-fields';
import { Container, Grid, Divider, Form, Search,  Header, Segment, Icon, Item, Label, Rating } from 'semantic-ui-react';
import PhotographerSearch from '../photographer-search/photographer-search.container';
import './dashboard.container.css';
import ReviewFeed from '../review-feed/review-feed.container';
import AdminSearch from '../AdminSearch/AdminSearch.container';
import DashboardHeader from '../dashboard-header/dashboard-header.container';
import ReviewMenu from '../review-menu/review-menu.component';



class Dashboard extends React.Component {
  componentDidMount(){
  };

  render(){
    return (
    <Container> 
      <DashboardHeader/>
      <ReviewMenu/>
      {/* <ReviewFeed /> */}
    </Container>

  )

  }
}
    
Dashboard.defaultProps = {
    
}

const mapStatetoProps = state => ({
  role: state.user.role
});


export default reduxForm({
  form: 'search'
})(connect(mapStatetoProps)(Dashboard))