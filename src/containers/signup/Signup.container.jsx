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

class Signup extends React.Component {
  submitHandler(val){
    const body = {
      email: val.email,
      password: val.password,
      isApproved: false,
    }
    console.log(val);
    this.props.createUser(body);  
  }


render () {
  return (
    <Grid container stackable columns={2}>
    <Grid.Column width={9}>
    <Container>   
    <Header as='h3' dividing>
      Sign Up
    </Header>
    <Segment attached id="signup-notice">
      All new accounts are subject to a verification process by the website administrator.
      You will not be able to view or submit any reviews until your account is verified.
    </Segment>
    <Divider/>
    <Form onSubmit={this.props.handleSubmit(this.submitHandler.bind(this))} method="post">
    <Field  component={FormInput}
                    name="email" 
                    label="Email"
                    placeholder="Olivia.B@gmail.com"
                    width={16}>
        </Field>
        <Field  component={FormInput}
                    name="password" 
                    label="Password"
                    type="password"
                    
                    width={16}>
        </Field>
      <Divider/>
      <Form.Field>
        <Checkbox label={<label>
          
            I agree to the <Link to="/terms" target="_blank" >Terms and Conditions</Link>
        </label>} />
      </Form.Field>
      <Button primary type='submit'  size='big'>Sign Up</Button>
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

});

export default reduxForm({
  form: 'signup'
})(connect(mapStateToProps, {createUser})(Signup))