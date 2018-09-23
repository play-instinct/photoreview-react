import React from 'react';
import { Field, reduxForm} from 'redux-form';
import { connect } from 'react-redux';
import { FormInput, fieldValidators, FormDatePicker, FormTextArea } from 'semantic-redux-form-fields';
import { Button, Checkbox, Form, Segment, Icon, Modal, Header, Message, Rating } from 'semantic-ui-react';
import { Container, Grid, Divider } from 'semantic-ui-react';
import { fetchUserLogin } from '../../actions';



class Review extends React.Component {
  submitHandler(val){
    const email = val.email;
    const password = val.password;
    this.props.fetchUserLogin(email, password);
    
  }
render () {
  return (
    <Grid container stackable columns={2}>
    <Grid.Column width={11}>
    <Container>
      <Header as='h3' dividing>
        Submit a Review
      </Header>
      <Form onSubmit={this.props.handleSubmit(this.submitHandler.bind(this))} method="post">
        <Field  component={FormInput}
                    name="photographerName" 
                    label="Photographer's Name"
                    validate={fieldValidators.required}
                    placeholder="Mark McLure"
                    width={16}>
        </Field>

          <Field  component={FormInput}
                    name="photographerAlias" 
                    label="Photographer's Alias"
                    type="text"
                    validate={fieldValidators.required}
                    width={16}>
        </Field>
        <Field  component={FormInput}
                    name="photographerWebsite" 
                    label="Photographer's Website"
                    type="text"
                    validate={fieldValidators.required}
                    width={16}>
        </Field>
        <Field  component={FormInput}
                    name="InstagramUrl" 
                    label="Instagram URL"
                    type="text"
                    validate={fieldValidators.required}
                    width={16}>
        </Field>
        <Field  component={FormDatePicker}
                    name="EncounterDate" 
                    label="Encounter Date *"
                    type="date"
                    validate={fieldValidators.required}
                    width={16}>

        </Field>
        <Message size='mini'> *  Encounter dates are kept private from other users to protect your anonymity. </Message>
        <Field  component={FormInput}
                    name="activeLocation" 
                    label="Active Location"
                    type="text"
                    validate={fieldValidators.required}
                    width={16}>

        </Field>
        <Form.Field>
            <label>Star Rating</label>
            <Rating icon='star' defaultRating={0} maxRating={5} size='large'/>
        </Form.Field>
        <Field
            component={FormTextArea}
            name="Experience Summary" 
            label="Experience Summary"
            validate={fieldValidators.required} />
        <Divider/>
        <Button primary type='submit' size='big'>Submit Review</Button>
      </Form>
  </Container>
  </Grid.Column>
  <Grid.Column width={5}>
    <Header as='h4' dividing>
        Review Writing Tips
    </Header>
    <Header as ="h4" dividing>
    FAQ
    </Header>

  </Grid.Column>
  
  </Grid>
  ) 
  }
}

const mapStateToProps = state => ({

});

export default reduxForm({
  form: 'review'
})(connect(mapStateToProps, {fetchUserLogin})(Review))