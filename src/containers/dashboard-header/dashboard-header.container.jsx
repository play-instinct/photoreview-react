import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'; 
import { Field, reduxForm }  from 'redux-form';
import { Link } from 'react-router-dom';
import { FormInput, fieldValidators} from 'semantic-redux-form-fields';
import { Container, Grid, Divider, Form, Search,  Header, Segment, Icon, Item, Label, Rating } from 'semantic-ui-react';
import PhotographerSearch from '../photographer-search/photographer-search.container';
import './dashboard-header.container.css';
import AdminSearch from '../AdminSearch/AdminSearch.container';






class DashboardHeader extends React.Component {
  componentDidMount(){
  };

  render(){
    if (this.props.role != 'user') {
      return (
        <Grid columns={16} textAlign='center'>
          <Header as='h4' icon id="dashboard-header">
            <Icon name='dashboard'/>
              Admin Dashboard
              <Header.Subheader>
                Logged in as {this.props.user.email}
               </Header.Subheader>

          </Header>
          {/* <Grid.Row>
            <AdminSearch/>
          </Grid.Row> */}
          <Grid.Row columns={3} id="dashboard-menu">
            <Grid.Column textAlign='center'>
              <Link to="/dashboard/users" className="dash-link">9</Link>
              <Header sub  className='link-header'>Users</Header>
            </Grid.Column>
           
            <Grid.Column textAlign='center'>
              <Link to="/dashboard/reviews" className="dash-link">11</Link>
              <Header sub className='link-header'>Reviews</Header>
            </Grid.Column>
            <Grid.Column textAlign='center'>
            <Link to="/dashboard/notes" className="dash-link">2</Link>
              <Header sub  className='link-header'>
                Notes
              </Header>
            </Grid.Column>
          </Grid.Row>
          </Grid>
          
      )
    }
    else return (
      <Grid columns={16} textAlign='center'>
      <Header as='h4'  icon id="dashboard-header">
      <Icon name='dashboard'/>
        Dashboard
      <Header.Subheader>Welcome, {this.props.user.email}!</Header.Subheader>
    </Header>
    <Grid.Row columns={3}>
      <Grid.Column textAlign='center'>
        <Header sub className='link-header'>Total APPROVED Reviews</Header>
        <Link to="/approved-reviews" className="dash-link">3</Link>
      </Grid.Column>
      <Grid.Column textAlign='center'>
        <Header sub className='link-header'>Total SUBMITTED Reviews</Header>
        <Link to="/total-reviews" className="dash-link">4</Link>
      </Grid.Column>
    </Grid.Row>
</Grid>)
    
  }
}
    
DashboardHeader.defaultProps = {
    //props will be different value of our review lists? notifications?
}

const mapStatetoProps = state => ({
  role: state.user.role,
  user: state.user,
  users: state.users, 
  reviews: state.users,
});


export default reduxForm({
  form: 'search'
})(connect(mapStatetoProps)(DashboardHeader))