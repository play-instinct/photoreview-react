import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { FormInput, fieldValidators} from 'semantic-redux-form-fields';
import { Button, Checkbox, Form, Segment, Icon, Modal } from 'semantic-ui-react';
import { Container, Grid, Divider } from 'semantic-ui-react';
import { Header } from 'semantic-ui-react';
import { createUser } from '../../actions';
import { Link } from 'react-router-dom';
import './Signup.container.css';

import appConfig from '../../config/appConfig';


class SignupSocial extends React.Component {
  submitHandler(val){
  }

  fetchAuth0(){
    console.log('fetch auth0')
  }

render () {
  return (
    <Grid container stackable columns={2}>
    <Grid.Column width={9}>
    <Container>   
    <Header as='h3' dividing>
      Verify Your Identity
    </Header>
    <Segment attached id="signup-notice">
      All new accounts are subject to a verification process by the website administrator.
      You will not be able to view or submit any reviews until your account is verified.
    </Segment>
    <Divider/>
    <Form onSubmit={this.props.handleSubmit(this.submitHandler.bind(this))} method="post">
      <Form.Field>
        <label>Verify your Social Media</label>
        <Divider/>

        <Grid columns={1}>
          <Grid.Row>
            <Grid.Column>
                <Button size="huge" fluid id="sm-verify-button">
                <Icon name="check square"/>
                 <a href={`${appConfig.LOGIN_ENDPOINT}/`}>Verify Social Media</a>
              </Button>
            </Grid.Column>
            </Grid.Row>
        </Grid>
      </Form.Field>
      <Divider/>
    </Form>
  </Container>
    </Grid.Column>
    <Grid.Column width={7}>
      <Container>
      <Header as='h4'>Why do I have to connect a social media account?</Header>
      <p>Your connected official social media account is used for verification of your identity as the model and person you claim to be.</p> 


<p>It allows us to confirm that the reviews
posted on this website are by real models voicing their experiences, and not anyone
attempting to spread deflammatory 
or otherwise false information.</p>



<p>Your account will not be approved unless
one of your official and/or personal social media accounts is
connected.</p> 

<p>We will never have access to your data and will never post on your behalf on any social media platform. </p> 


      </Container>
    </Grid.Column>

  </Grid>
  ) 
}
}

const mapStateToProps = state => ({
  user: state.user,
});

export default reduxForm({
  form: 'signup'
})(connect(mapStateToProps)(SignupSocial))