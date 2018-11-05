import React from 'react';
import { Field, reduxForm} from 'redux-form';
import { connect } from 'react-redux';
import { FormInput, fieldValidators, FormDatePicker, FormTextArea } from 'semantic-redux-form-fields';
import { Button, Checkbox, Form, Segment, Icon, Modal, Header, Message, Rating } from 'semantic-ui-react';
import { Container, Grid, Divider } from 'semantic-ui-react';
import { fetchUserLogin } from '../../actions';
import { Link } from 'react-router-dom';
import './review.container.css';
import './review-result.container.css';
import { fetchReview } from '../../actions';
import { rateReview } from '../../actions';


class ReviewResult extends React.Component {

  componentDidMount(){
        this.props.fetchReview(this.props.match.params.id);
    }
  submitHandler(val) {
      const body = {
          noteBody: val.note,
          action: this.state.visibileModal,
          id: this.props.review.currentReview._id
      }
      console.log(body)
      this.props.rateReview(body.id, body)  
  };

  constructor(props) {
    super(props);
    this.state = {
        visibileModal: null,

    };
  }

  changeVisibleModal(name){
    this.setState({
        visibileModal : name
    })
  }


render () {
    if (this.props.role != 'user') {
        return (
            <div>
            {this.props.review.currentReview ? <div>
                <Grid container stackable columns={2} id="overall-container-review-result" padded>
                    <Grid container id="admin-container" columns={3} textAlign="center">
                            <Grid.Row>
                                <Grid.Column>
                                <Modal trigger={<Button secondary type='submit' onClick={ e => {this.changeVisibleModal('approved')}}>Approve Review</Button>}>
                                <Modal.Header>Approve Review</Modal.Header>
                                    <Modal.Content image>
                                    <Modal.Description>
                                        <Header>Approve this Review</Header>
                                        <Form onSubmit={this.props.handleSubmit(this.submitHandler.bind(this))} method="put">
                                            <Field
                                                    component={FormTextArea}
                                                    name="note" 
                                                    label="Add Note:"
                                                    /> 

                                            <Button secondary type='submit'>Approve Review</Button>                           
                                        </Form>
                                    </Modal.Description>
                                    </Modal.Content>
                                </Modal>
                                </Grid.Column>
                                <Grid.Column>
                                    <Modal trigger={<Button secondary type='submit' onClick={ e => {this.changeVisibleModal('postponed')}}>Postpone Review</Button>}>
                                        <Modal.Header>Postpone Review</Modal.Header>
                                        <Modal.Content image>
                                        <Modal.Description>
                                            <Header>Postpone this Review</Header>
                                            <Form onSubmit={this.props.handleSubmit(this.submitHandler.bind(this))} method="put">
                                            <Field
                                                component={FormTextArea}
                                                name="note" 
                                                label="Add Note:"
                                                />    
                                            <Button secondary type='submit'>Postpone Review</Button>                       
                                        </Form>
                                        </Modal.Description>
                                        </Modal.Content>
                                    </Modal>
                                </Grid.Column>
                                <Grid.Column>
                                <Modal trigger={<Button secondary type='submit' onClick={ e => {this.changeVisibleModal('rejected')}}>Reject Review</Button>}>
                                        <Modal.Header>Reject Review</Modal.Header>
                                        <Modal.Content image>
                                        <Modal.Description>
                                            <Header>Reject this Review</Header>
                                            <Form onSubmit={this.props.handleSubmit(this.submitHandler.bind(this))} method="put">
                                            <Field
                                                component={FormTextArea}
                                                name="note" 
                                                label="Add Note:"
                                                />    
                                            <Button secondary type='submit'>Reject Review</Button>                           
                                        </Form>
                                        </Modal.Description>
                                        </Modal.Content>
                                    </Modal>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    <Grid.Column width={11}>
                        <Grid container columns={2} id="review-result-container" padded>
                            <Grid.Column textAlign="left" width={6}>
                                <Header>
                                Photographer's Name:
                                </Header>
                            </Grid.Column>
                            <Grid.Column width={10}>
                                { this.props.review.currentReview.photographer.name }
                            </Grid.Column>
                            <Grid.Column textAlign="left" width={6}>
                                <Header>
                                Photographer's Alias:
                                </Header>
                            </Grid.Column>
                            <Grid.Column width={10}>
                            { this.props.review.currentReview.photographer.photographerAlias }
                            </Grid.Column>
                            <Grid.Column textAlign="left" width={6}>
                                <Header>
                                Location & Year:
                                </Header>
                            </Grid.Column>
                            <Grid.Column width={10}>
                            { this.props.review.currentReview.encounterLocation }
                            { this.props.review.currentReview.encounterDate }
                            </Grid.Column>
                            <Grid.Column textAlign="left" width={6}>
                                <Header>
                                Star Rating:
                                </Header>
                            </Grid.Column>
                            <Grid.Column width={10}>
                                <Rating icon='star' defaultRating={this.props.review.currentReview.starRating} maxRating={5} size='small'/>
                            </Grid.Column>
                            <Grid.Column textAlign="left" width={3}>
                                <Header>
                                Summary:
                                </Header>
                            </Grid.Column>
                            <Grid.Column width={13}>
                                <p>{ this.props.review.currentReview.reviewText }
                                </p>
                            </Grid.Column>
                        </Grid>
                    </Grid.Column>
                    <Grid.Column width={5} id="review-result-left">
                        <Header as="h3" textAlign="center" dividing>
                            Additional Details
                        </Header>
                        <Grid.Column>
                        <Checkbox label='TFP' defaultChecked />
                        </Grid.Column>
                        <Grid.Column>
                            <Checkbox label='Paid' />
                        </Grid.Column>
                        <Grid.Column>
                            <Checkbox label='Retouched Results' defaultChecked />
                        </Grid.Column>
                        <Grid.Column>
                            <Checkbox label='Quick' />
                        </Grid.Column>
                        <Grid.Column>
                        <Checkbox label='Friendly' defaultChecked />
                        </Grid.Column>
                        <Grid.Column>
                        <Checkbox label='Helpful' />
                        </Grid.Column>
                        <Header as="h3" textAlign="center" dividing>Status</Header>
                        <Grid.Column>
                        { this.props.review.currentReview.status }
                        </Grid.Column> 
                        <Header as="h3" textAlign="center" dividing>Raw Data</Header>
                        <Grid.Column className="raw-data-container">
                            <Grid.Row className="raw-data-row">
                                <Header sub className="raw-data-header">Submitted by:</Header> 
                            </Grid.Row>
                            <Grid.Row className="raw-data-row">
                                <Header sub className="raw-data-header">Submission Date:</Header> { this.props.review.currentReview.createdAt }
                            </Grid.Row>
                            <Grid.Row className="raw-data-row">
                                <Header sub className="raw-data-header">Photographer Name:</Header>    { this.props.review.currentReview.photographer.name }
                            </Grid.Row>
                            <Grid.Row className="raw-data-row">
                                <Header sub className="raw-data-header">Photographer Alias:</Header> { this.props.review.currentReview.photographer.photographerAlias }
                            </Grid.Row>
                            <Grid.Row className="raw-data-row">
                                <Header sub className="raw-data-header">Encounter Date:</Header> { this.props.review.currentReview.encounterDate }
                            </Grid.Row>
                            <Grid.Row className="raw-data-row">
                                <Header sub className="raw-data-header">Active Location:</Header> { this.props.review.currentReview.encounterLocation }
                            </Grid.Row>
                            <Grid.Row className="raw-data-row">
                                <Header sub className="raw-data-header">Star Rating:</Header> 
                                <Rating icon='star' defaultRating={this.props.review.currentReview.starRating} maxRating={5} size='small'/>
                            </Grid.Row>
                        </Grid.Column>                       
                    </Grid.Column>
                </Grid>
            </div> 
           : <div>loading</div> }  </div>
        ) 
    }
    else return (
        <div>
            {this.props.review.currentReview ? <div>
        <Grid container stackable columns={2} id="overall-container-review-result" padded>
                <Grid.Column width={11}>
                    <Grid container columns={2} id="review-result-container" padded>
                        <Grid.Column textAlign="left" width={6}>
                            <Header>
                            Photographer's Name:

                            </Header>
                        </Grid.Column>
                        <Grid.Column width={10}>
                        <Link to="/photographer/" >{this.props.review.currentReview.photographer.name}</Link>
                        </Grid.Column>
                        <Grid.Column textAlign="left" width={6}>
                            <Header>
                            Photographer's Alias:
                            </Header>
                        </Grid.Column>
                        <Grid.Column width={10}>
                        { this.props.review.currentReview.photographer.photographerAlias }
                        </Grid.Column>
                       
                        <Grid.Column textAlign="left" width={6}>
                            <Header>
                            Star Rating:
                            </Header>
                        </Grid.Column>
                        <Grid.Column width={10}>
                            <Rating icon='star' defaultRating={this.props.review.currentReview.starRating} maxRating={5} size='small'/>
                        </Grid.Column>
                        <Grid.Column textAlign="left" width={3}>
                            <Header>
                            Summary:
                            </Header>
                        </Grid.Column>
                        <Grid.Column width={13}>
                            <p className="revtext">{this.props.review.currentReview.reviewText}
                            </p>
                        </Grid.Column>
                        <Grid.Column textAlign="left" width={6}>
                            <Header>
                            Location | Year:
                            </Header>
                        </Grid.Column>
                        <Grid.Column width={10}>
                        {this.props.review.currentReview.encounterLocation } |   {this.props.review.currentReview.encounterDate}
                        </Grid.Column>
                    </Grid>
                </Grid.Column>
                <Grid.Column width={5} id="review-result-left" padded>
                    <Header as="h3" textAlign="center" dividing>
                        Additional Details
                    </Header>
                    <Grid.Column>
                     <Checkbox label='TFP' defaultChecked />
                     </Grid.Column>
                     <Grid.Column>
                        <Checkbox label='Paid' />
                     </Grid.Column>
                     <Grid.Column>
                        <Checkbox label='Retouched Results' defaultChecked />
                    </Grid.Column>
                    <Grid.Column>
                         <Checkbox label='Quick' />
                     </Grid.Column>
                    <Grid.Column>
                     <Checkbox label='Friendly' defaultChecked />
                     </Grid.Column>
                     <Grid.Column>
                     <Checkbox label='Helpful' />
                     </Grid.Column>                    
                </Grid.Column>
            </Grid>
            </div> 
           : <div>loading</div> }  </div>
    )

  }
}

const mapStateToProps = state => ({
  appState: state.appState,
  user: state.user,
  review: state.review,
  photographer: state.photographer,
  role: state.role,

});


const connectedReviewResult = connect(mapStateToProps, {rateReview, fetchReview} )(ReviewResult)

export default reduxForm({
  form: 'review',
  enableReinitialize: true
})(connectedReviewResult)
