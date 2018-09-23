import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { FormInput, fieldValidators} from 'semantic-redux-form-fields';
import { Button, Checkbox, Form, Segment, Icon, Modal, Header } from 'semantic-ui-react';
import { Container, Grid, Divider } from 'semantic-ui-react';
import { fetchUserLogin } from '../../actions';



class Login extends React.Component {
  submitHandler(val){
    const email = val.email;
    const password = val.password;
    this.props.fetchUserLogin(email, password);
    
  }
render () {
  return (
    <Container>
      <Header as='h3' dividing>
        Login
      </Header>
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
        <Divider/>
        <Button primary type='submit' size='big'>Login</Button>
      </Form>
  </Container>
  ) 
  }
}

const mapStateToProps = state => ({

});

export default reduxForm({
  form: 'login'
})(connect(mapStateToProps, {fetchUserLogin})(Login))