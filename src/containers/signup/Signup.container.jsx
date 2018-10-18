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
    console.log(val);
    const email = val.email;
    const password = val.password;
    this.props.createUser(email, password);
    
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
                    validate={fieldValidators.required}
                    placeholder="Olivia.B@gmail.com"
                    width={16}>
        </Field>
        <Field  component={FormInput}
                    name="password" 
                    label="Password"
                    type="password"
                    validate={fieldValidators.required}
                    width={16}>
        </Field>
      <Form.Field>
        <label>Verify your Social Media</label>
        {/* <Divider/> */}
        
        <Grid columns={3}>
          <Grid.Row>
            <Grid.Column>
              <Button color='instagram'>
                <Icon name='instagram' />  Instagram
              </Button>
            </Grid.Column>
            <Grid.Column>
                <Button color='facebook'>
                <Icon name='facebook' /> Facebook
              </Button>
            </Grid.Column>
            <Grid.Column>
            <Button color='twitter' >
              <Icon name='twitter' /> Twitter
            </Button>
    
            
            </Grid.Column>
            </Grid.Row>
        </Grid>
      </Form.Field>
      <Divider/>
      <Form.Field>
        <Checkbox label={<label>
          
            I agree to the <Link to="/terms-and-conditions">Terms and Conditions</Link>
        </label>} />
      </Form.Field>
      <Button primary type='submit'>Sign Up</Button>
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