import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'; 
import { Field, reduxForm }  from 'redux-form';
import { Link } from 'react-router-dom';
import { FormInput, fieldValidators} from 'semantic-redux-form-fields';
import { Container, Grid, Divider, Form, Search,  Header, Segment, Icon, Item, Label, Rating } from 'semantic-ui-react';
import './photographer.container.css';
import ReviewFeed from '../review-feed/review-feed.container';
import { fetchUserLogin } from '../../actions';
import { fetchPhotographer } from '../../actions';





class Photographer extends React.Component {
  componentDidMount(){
    console.log('test');
    this.props.fetchPhotographer(this.props.match.params.id);
  }
  render(){
    return (
           <Container>
            {this.props.photographer.currentPhotographer ? 
                <Container>
                <Header dividing  as='h1'  textAlign='center' id= "photographer-header" icon>
                { this.props.photographer.currentPhotographer.name }
             <Icon name='smile outline' />
                <Header.Subheader className="photo-rating-text">Highly Approved</Header.Subheader>
                { this.props.photographer.currentPhotographer.createdAt }
            <Header.Subheader>             
                <Rating icon='star' 
                defaultRating={4} 
                maxRating={5}
                disabled={true} 
                size='tiny' id="star-rating"/>
            </Header.Subheader>
                <Header.Subheader>
                    <span className ="photo-header-label">Known Aliases: </span> 
                    { this.props.photographer.currentPhotographer.photographerAlias }
                    </Header.Subheader>
                    <Header.Subheader>
                    <span className ="photo-header-label">Active in:</span> 
                    <Link to="/approved-reviews" className="photo-link">
                        { this.props.photographer.currentPhotographer.encounterLocation }
                      
                       
                    </Link>
                </Header.Subheader>
            </Header>
                <Grid columns={16} textAlign='center'>
                <Divider/>
            </Grid>
            <ReviewFeed/>
            </Container>
           : 
            <div>couldn't find this photographer.</div> }  
           </Container>

            ) 
      
  }
}
    

const mapStateToProps = state => ({
    appState: state.appState,
    user: state.user,
    photographer: state.photographer,
    reviews: state.photographer.reviews
    
  });
  

  

const connectedPhotographerResult = connect(mapStateToProps, {fetchPhotographer})(Photographer)

export default reduxForm({
  form: 'photographer',
  enableReinitialize: true
})(connectedPhotographerResult)



