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






class Dashboard extends React.Component {
  componentDidMount(){
  };
  

  //this doesn't work for some reason
  render(){
    if (this.props.role == 'user') {
      return (
        <Grid columns={16} textAlign='center'>
          <Header as='h4' icon id="dashboard-header">
            <Icon name='dashboard'/>
              Admin Dashboard
          </Header>
          <Grid.Row>
            <AdminSearch/>

          </Grid.Row>
          <Grid.Row columns={3}>
            <Grid.Column textAlign='center'>
              <Header sub  className='link-header'>New Users</Header>
              <Link to="/total-reviews" className="dash-link">9</Link>
            </Grid.Column>
           
            <Grid.Column textAlign='center'>
              <Header sub className='link-header'>New Reviews</Header>
              <Link to="/approved-reviews" className="dash-link">11</Link>
            </Grid.Column>
            <Grid.Column textAlign='center'>
              <Header sub  className='link-header'>
                New Responses
              </Header>
              <Link to="/approved-reviews" className="dash-link">2</Link>
            </Grid.Column>
        
          </Grid.Row>
          <Divider/>
          <Grid.Row textAlign='left'>
            <Grid.Column width={16} textAlign='left'>
              <Header size='medium' textAlign='center'>Recent Reviews Posted</Header>
            </Grid.Column>
            </Grid.Row>
          <ReviewFeed/>
          </Grid>
      )
    }
    else return (
      <Grid columns={16} textAlign='center'>
      <Header as='h4' dividing icon id="dashboard-header">
      <Icon name='dashboard'/>
        Dashboard
      <Header.Subheader>Welcome, User!</Header.Subheader>
    </Header>
    <Grid.Row columns={4}>
      <Grid.Column textAlign='center'>
        <Header sub>Last Login</Header>
        <Link to="/last-login" className="dash-link">Sept. 21 2018 3.34 PM</Link>
      </Grid.Column>
      <Grid.Column textAlign='center'>
        <Header sub>Total APPROVED Reviews</Header>
        <Link to="/approved-reviews" className="dash-link">2</Link>
      </Grid.Column>
      <Grid.Column textAlign='center'>
        <Header sub>Total Reviews</Header>
        <Link to="/total-reviews" className="dash-link">2</Link>
      </Grid.Column>
    </Grid.Row>
    <Divider/>
    <ReviewFeed/>
</Grid>)
    
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