import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'; 
import { Field, reduxForm }  from 'redux-form';
import { Link } from 'react-router-dom';
import { FormInput, fieldValidators} from 'semantic-redux-form-fields';
import { Container, Grid, Divider, Form, Search,  Header, Segment, Icon, Item, Label, Rating } from 'semantic-ui-react';
import './review-feed.container.css';



class ReviewFeed extends React.Component {
    componentDidMount(){
    };
    render(){
        return (
          <Grid centered columns={1} id="review-feed-container">
            <Grid.Row textAlign='left'>
            <Grid.Column width={12} textAlign='left'>
              <Item.Group divided link>
                <Item>
                  {/* <Item.Content>
                    <Item.Header as='a'> Shoot Review - { this.props.photographer.reviews[0].encounterDate} </Item.Header>
                    <Item.Meta>
                    <Rating maxRating={5} defaultRating={ this.props.photographer.reviews[0].starRating} icon='star' size='large' disabled/>
                    </Item.Meta>
                    <Item.Description>
                      <p> { this.props.photographer.reviews[0].reviewText}</p>   
                    </Item.Description>
                    <Item.Extra>
                      <p>reviewed by a model in { this.props.photographer.reviews[0].createdAt}</p>
                    </Item.Extra>
                  </Item.Content> */}
                </Item>
              </Item.Group>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        )
    }
}




const mapStatetoProps = state => ({

  appState: state.appState,
  user: state.user,
  photographer: state.photographer,
  reviews: state.photographer.reviews
  

});

export default connect(mapStatetoProps)(ReviewFeed);























