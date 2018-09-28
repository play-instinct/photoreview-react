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
          <Grid id="review-feed-container">
            <Grid.Row textAlign='left'>
            <Grid.Column width={12} textAlign='left'>
              <Item.Group divided link>
                <Item>
                  <Item.Content>
                    <Item.Header as='a'>Jennifer Hernandez - @indubiousbattle</Item.Header>
                    <Item.Meta>
                    <Rating maxRating={5} defaultRating={5} icon='star' size='large' />
                    </Item.Meta>
                    <Item.Description>
                      <p>"Jen was professional and creative during our shoot. She brought a variety
                      of cool and interesting pieces from her vintage wadrobe for styling which
                      really helped me get in the mood/esthetic of the shoot. Can't wait to see
                      the images!" </p>   
                    </Item.Description>
                    <Item.Extra>
                      <p>reviewed by a model from Northern California May 20th 2018.</p>
                    </Item.Extra>
                  </Item.Content>
                </Item>
                <Item>
                  <Item.Content>
                    <Item.Header as='a'>Jennifer Hernandez - @indubiousbattle</Item.Header>
                    <Item.Meta>
                    <Rating maxRating={5} defaultRating={5} icon='star' size='large' />
                    </Item.Meta>
                    <Item.Description>
                      <p>"Jen was professional and creative during our shoot. She brought a variety
                      of cool and interesting pieces from her vintage wadrobe for styling which
                      really helped me get in the mood/esthetic of the shoot. Can't wait to see
                      the images!" </p>   
                    </Item.Description>
                    <Item.Extra>
                      <p>reviewed by a model from Northern California May 20th 2018.</p>
                    </Item.Extra>
                  </Item.Content>
                </Item>
              </Item.Group>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        )
    }
}




const mapStatetoProps = state => ({

});

export default connect(mapStatetoProps)(ReviewFeed);























