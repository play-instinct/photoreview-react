import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'; 
import { Field, reduxForm }  from 'redux-form';
import { Link } from 'react-router-dom';
import { FormInput, fieldValidators} from 'semantic-redux-form-fields';
import { Container, Grid, Divider, Form, Search,  Header, Segment, Icon, Item, Label, Rating } from 'semantic-ui-react';
import PhotographerSearch from '../photographer-search/photographer-search.container';
import './dashboard.container.css';


const Dashboard = props => (
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
    <Grid.Row textAlign='left' columns={16}>
    <Header size='medium' textAlign='right' >Recently Reviews Posted by Others</Header>
    </Grid.Row>
    <Grid.Row textAlign='left' columns={2}>
      <Item.Group divided link>
        <Item>
          <Item.Content>
            <Item.Header as='a'>Jennifer Hernandez - @indubiousbattle</Item.Header>
            <Item.Meta>
            <Rating maxRating={5} defaultRating={5} icon='star' size='large' />
            </Item.Meta>
            <Item.Description>
              <p>"Jen was professional and creative during our shoot. She brought a variety
              of cool and interesting pieces from her vintage wadrobe for styling which
              really helped me get in the mood/esthetic of the shoot. Can't wait to see
              the images!" </p>   
            </Item.Description>
            <Item.Extra>
              <p>reviewed by a model from Northern California May 20th 2018.</p>
            </Item.Extra>
          </Item.Content>
        </Item>
        <Item>
          <Item.Content>
            <Item.Header as='a'>Jennifer Hernandez - @indubiousbattle</Item.Header>
            <Item.Meta>
            <Rating maxRating={5} defaultRating={5} icon='star' size='large' />
            </Item.Meta>
            <Item.Description>
              <p>"Jen was professional and creative during our shoot. She brought a variety
              of cool and interesting pieces from her vintage wadrobe for styling which
              really helped me get in the mood/esthetic of the shoot. Can't wait to see
              the images!" </p>   
            </Item.Description>
            <Item.Extra>
              <p>reviewed by a model from Northern California May 20th 2018.</p>
            </Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>
    </Grid.Row>
</Grid>

        );
    
Dashboard.defaultProps = {
    
}

const mapStatetoProps = state => ({

});


export default reduxForm({
  form: 'search'
})(connect(mapStatetoProps)(Dashboard))