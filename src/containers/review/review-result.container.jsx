import React from 'react';
import { Field, reduxForm} from 'redux-form';
import { connect } from 'react-redux';
import { FormInput, fieldValidators, FormDatePicker, FormTextArea } from 'semantic-redux-form-fields';
import { Button, Checkbox, Form, Segment, Icon, Modal, Header, Message, Rating } from 'semantic-ui-react';
import { Container, Grid, Divider } from 'semantic-ui-react';
import { fetchUserLogin } from '../../actions';
import './review.container.css';
import './review-result.container.css';

//fetch review, but also need to have ability to update review
import { fetchReview } from '../../actions';
import { createReview } from '../../actions';




class ReviewResult extends React.Component {

  componentDidMount(){
        // this.props.fetchReview(this.props.match.params.id);
    }
  submitHandler(val) {
  };



render () {
    let currentValue2 = 'approved';
    if (this.props.role != 'user') {
        return (
            <Grid container stackable columns={2} id="overall-container-review-result" padded>
                <Grid container id="admin-container" columns={3} textAlign="center">
                        <Grid.Row>
                            <Grid.Column>
                            <Modal trigger={<Button secondary type='submit'>Approve Review</Button>}>
                            <Modal.Header>Approve Review</Modal.Header>
                                <Modal.Content image>
                                <Modal.Description>
                                    <Header>Approve this Review</Header>
                                    <Form onSubmit={this.props.handleSubmit(this.submitHandler.bind(this))} method="post">
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
                                <Modal trigger={<Button secondary type='submit'>Postpone Review</Button>}>
                                    <Modal.Header>Postpone Review</Modal.Header>
                                    <Modal.Content image>
                                    <Modal.Description>
                                        <Header>Postpone this Review</Header>
                                        <Form onSubmit={this.props.handleSubmit(this.submitHandler.bind(this))} method="post">
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
                            <Modal trigger={<Button secondary type='submit'>Reject Review</Button>}>
                                    <Modal.Header>Reject Review</Modal.Header>
                                    <Modal.Content image>
                                    <Modal.Description>
                                        <Header>Reject this Review</Header>
                                        <Form onSubmit={this.props.handleSubmit(this.submitHandler.bind(this))} method="post">
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
                            Yekaterina Novikova
                        </Grid.Column>
                        <Grid.Column textAlign="left" width={6}>
                            <Header>
                            Photographer's Alias:
                            </Header>
                        </Grid.Column>
                        <Grid.Column width={10}>
                            Ykat, Kat, Iznanka
                        </Grid.Column>
                        <Grid.Column textAlign="left" width={6}>
                            <Header>
                            Location & Year:
                            </Header>
                        </Grid.Column>
                        <Grid.Column width={10}>
                            San Francisco 2018
                        </Grid.Column>
                        <Grid.Column textAlign="left" width={6}>
                            <Header>
                            Star Rating:
                            </Header>
                        </Grid.Column>
                        <Grid.Column width={10}>
                            <Rating icon='star' defaultRating={5} maxRating={5} size='small'/>
                        </Grid.Column>
                        <Grid.Column textAlign="left" width={3}>
                            <Header>
                            Summary:
                            </Header>
                        </Grid.Column>
                        <Grid.Column width={13}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Etiam sagittis accumsan libero et tempor. Vivamus eleifend 
                                lorem tincidunt sem pharetra, varius pharetra ligula aliquam. 
                                Sed elementum eget erat eu fringilla. Maecenas in malesuada ipsum. 
                                Integer vitae diam rutrum ante viverra porttitor quis sed augue. 
                                Etiam porttitor nulla ultricies tristique fermentum. Aenean fringilla 
                                lacus sed mauris consectetur, lobortis dictum lorem iaculis. 
                                Suspendisse accumsan scelerisque tortor, ac consectetur ante consequat ut. 
                                Donec gravida quis neque sed ultrices. Etiam vel tellus tortor. Integer 
                                rutrum lorem enim, non luctus elit accumsan eget. Mauris fermentum sagittis 
                                arcu eu mollis. Nam interdum ac dui in hendrerit.</p>

                            <p>Nunc non urna id lorem commodo sagittis. In pulvinar enim ex, at porttitor 
                                lorem tincidunt sit amet. Nullam tincidunt imperdiet ligula non pellentesque. 
                                Pellentesque at quam tincidunt purus imperdiet faucibus. Maecenas et neque sed 
                                purus volutpat malesuada. Curabitur venenatis ut enim porttitor suscipit. 
                                Aenean et volutpat felis. Nullam magna dolor, tincidunt sit amet cursus eget, 
                                facilisis ac enim. Sed lorem libero, rhoncus et enim vitae, efficitur vulputate 
                                leo. Sed eu turpis orci. Nulla ex massa, hendrerit sit amet tortor id, venenatis 
                                pharetra justo. Nulla porta ex a sapien laoreet, quis pretium urna molestie. 
                                Suspendisse auctor enim ut lacus vehicula sodales. Etiam egestas nibh id elit
                                luctus condimentum eu vel orci. Duis ac urna nec ex egestas vestibulum. Quisque 
                                ornare sed augue ac mattis
                            </p>
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
                     <Header as="h3" textAlign="center" dividing>Status</Header>
                     <Grid.Column></Grid.Column> 
                     <Header as="h3" textAlign="center" dividing>Raw Data</Header>
                     <Grid.Column></Grid.Column>                       
                </Grid.Column>
            </Grid>
        ) 
    }
    else return (
        <Grid container stackable columns={2} id="overall-container-review-result" padded>
                <Grid.Column width={11}>
                    <Grid container columns={2} id="review-result-container" padded>
                        <Grid.Column textAlign="left" width={6}>
                            <Header>
                            Photographer's Name:
                            </Header>
                        </Grid.Column>
                        <Grid.Column width={10}>
                            Yekaterina Novikova
                        </Grid.Column>
                        <Grid.Column textAlign="left" width={6}>
                            <Header>
                            Photographer's Alias:
                            </Header>
                        </Grid.Column>
                        <Grid.Column width={10}>
                            Ykat, Kat, Iznanka
                        </Grid.Column>
                        <Grid.Column textAlign="left" width={6}>
                            <Header>
                            Location & Year:
                            </Header>
                        </Grid.Column>
                        <Grid.Column width={10}>
                            San Francisco 2018
                        </Grid.Column>
                        <Grid.Column textAlign="left" width={6}>
                            <Header>
                            Star Rating:
                            </Header>
                        </Grid.Column>
                        <Grid.Column width={10}>
                            <Rating icon='star' defaultRating={5} maxRating={5} size='small'/>
                        </Grid.Column>
                        <Grid.Column textAlign="left" width={3}>
                            <Header>
                            Summary:
                            </Header>
                        </Grid.Column>
                        <Grid.Column width={13}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Etiam sagittis accumsan libero et tempor. Vivamus eleifend 
                                lorem tincidunt sem pharetra, varius pharetra ligula aliquam. 
                                Sed elementum eget erat eu fringilla. Maecenas in malesuada ipsum. 
                                Integer vitae diam rutrum ante viverra porttitor quis sed augue. 
                                Etiam porttitor nulla ultricies tristique fermentum. Aenean fringilla 
                                lacus sed mauris consectetur, lobortis dictum lorem iaculis. 
                                Suspendisse accumsan scelerisque tortor, ac consectetur ante consequat ut. 
                                Donec gravida quis neque sed ultrices. Etiam vel tellus tortor. Integer 
                                rutrum lorem enim, non luctus elit accumsan eget. Mauris fermentum sagittis 
                                arcu eu mollis. Nam interdum ac dui in hendrerit.</p>

                            <p>Nunc non urna id lorem commodo sagittis. In pulvinar enim ex, at porttitor 
                                lorem tincidunt sit amet. Nullam tincidunt imperdiet ligula non pellentesque. 
                                Pellentesque at quam tincidunt purus imperdiet faucibus. Maecenas et neque sed 
                                purus volutpat malesuada. Curabitur venenatis ut enim porttitor suscipit. 
                                Aenean et volutpat felis. Nullam magna dolor, tincidunt sit amet cursus eget, 
                                facilisis ac enim. Sed lorem libero, rhoncus et enim vitae, efficitur vulputate 
                                leo. Sed eu turpis orci. Nulla ex massa, hendrerit sit amet tortor id, venenatis 
                                pharetra justo. Nulla porta ex a sapien laoreet, quis pretium urna molestie. 
                                Suspendisse auctor enim ut lacus vehicula sodales. Etiam egestas nibh id elit
                                luctus condimentum eu vel orci. Duis ac urna nec ex egestas vestibulum. Quisque 
                                ornare sed augue ac mattis
                            </p>
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
    )

  }
}

const mapStateToProps = state => ({
  appState: state.appState,
  user: state.user,
  review: state.review,
});


ReviewResult.propTypes = {
};



const connectedReviewResult = connect(mapStateToProps)(ReviewResult)

export default reduxForm({
  form: 'review',
  enableReinitialize: true
})(connectedReviewResult)
