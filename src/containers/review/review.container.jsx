import React from 'react';
import { Field, reduxForm} from 'redux-form';
import { connect } from 'react-redux';
import { FormInput, fieldValidators, FormDatePicker, FormTextArea } from 'semantic-redux-form-fields';
import { Button, Checkbox, Form, Segment, Icon, Modal, Header, Message, Rating } from 'semantic-ui-react';
import { Container, Grid, Divider } from 'semantic-ui-react';
import { fetchUserLogin } from '../../actions';
import './review.container.css';
import { createPhotographer} from '../../actions';




class Review extends React.Component {
  submitHandler(val) {
    const body = {
      name : val.photographerName,
      photographerAlias : val.photographerAlias,
      website_url : val.website_url,
      instagram_url :val.instagram_url,
      created_by : val.created_by,
      status : val.status,
      encounterDate : val.encounterDate,
      encounterLocation : val.encounterLocation,
      starRating : val.starRating,
      reviewText : val.reviewText,
      author : val.author
    }
    console.log(body);
    this.props.createPhotographer(body)  
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
                    label="Encounter Location"
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
    <p>All reviews submitted to Hindsight must be approved by an Administrator before publication.</p>
    <p>All reviews will always be posted anonymously to protect your identity. 
We will never reveal your information. 
We encourage you to use discretion 
when writing reviews. </p>
    <Header as ="h4" dividing>
    FAQ
    </Header>
    <p class="faq-question">
      How long does the Review Approval Process take?
    </p>
    <p>The review process usually takes up to 4 days after initial </p>
    
    <p class="faq-question">
      Can I delete reviews after they are approved?
    </p>

     <p class="faq-question">
      How anonymous is my review?
    </p>
    <p class="faq-question">
      Who can see an approved review?
    </p>
  </Grid.Column>
  
  </Grid>
  ) 
  }
}

const mapStateToProps = state => ({
  appState: state.appState,
  user: state.user,
});

export default reduxForm({
  form: 'review'
})(connect(mapStateToProps, {createPhotographer})(Review))