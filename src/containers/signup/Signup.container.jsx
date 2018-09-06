import React from 'react';
import './Signup.container.css';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createUser } from '../../actions';
import { Button, Checkbox, Form, Segment, Icon } from 'semantic-ui-react';
import { Container, Grid, Divider } from 'semantic-ui-react';
import { Header } from 'semantic-ui-react';


class Signup extends React.Component {
  submitHandler(val){
    const email = val.email;
    const password = val.password;
    const name = val.name;
    this.props.createUser(name, email, password);
    
  }

render () {
  return (
    <Container>   
    <Header as='h3' dividing>
      Sign Up
    </Header>
    <Segment attached id="signup-notice">
      All new accounts are subject to a verification process by the website administrator.
      You will not be able to view or submit any reviews until your account is verified.
    </Segment>
    <Divider/>
    <Form>
      <Form.Field>
        <label>Email</label>
        <input placeholder='First Name' />
      </Form.Field>
      <Form.Field>
        <label>Password</label>
        <input placeholder='Last Name' />
      </Form.Field>
      <Form.Field>
        <label>Connect your Social Media</label>
        <Grid columns={3} divided>
          <Grid.Row>
            <Grid.Column>
            <Button color='instagram' compact>
              <Icon name='instagram' /> Instagram
            </Button>
            </Grid.Column>
            <Grid.Column>
            <Button color='facebook' compact>
              <Icon name='facebook' /> Facebook
            </Button>
            </Grid.Column>
            <Grid.Column>
            <Button color='twitter' compact>
              <Icon name='twitter' /> Twitter
            </Button>
            </Grid.Column>
            </Grid.Row>
        </Grid>

      </Form.Field>
      <Form.Field>
        <Checkbox label='I agree to the Terms and Conditions' />
      </Form.Field>
      <Divider/>

      <Button primary type='submit'>Sign Up</Button>
    </Form>


  </Container>
  ) 
}
}

const mapStateToProps = state => ({

});

export default reduxForm({
  form: 'signup'
})(connect(mapStateToProps, {createUser})(Signup))