import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'; 
import { Field, reduxForm }  from 'redux-form';
import { Link } from 'react-router-dom';
import { FormInput, fieldValidators} from 'semantic-redux-form-fields';
import { Container, Grid, Divider, Form, Search,  Header, Segment, Icon, Item, Label, Rating } from 'semantic-ui-react';
import './photographer.container.css';
import ReviewFeed from '../review-feed/review-feed.container';






class Photographer extends React.Component {
  componentDidMount(){
  };
  render(){
    return (
        <Container Grid>
                <Header dividing  as='h1'  textAlign='center' id= "photographer-header" icon>
               
                  
                Jennifer Hernandez

             <Icon name='smile outline' />
                <Header.Subheader textAlign='center' className="photo-rating-text">Highly Approved</Header.Subheader>

            <Header.Subheader>             
                <Rating icon='star' 
                defaultRating={4} 
                maxRating={5}
                disabled={true} 
                size='tiny' id="star-rating"/>
            </Header.Subheader>
                <Header.Subheader textAlign='center'>
                <span className ="photo-header-label">Known Aliases:</span> @indubiousbattle, Jenn Nervosa, Jenn
                </Header.Subheader>
                <Header.Subheader textAlign='center'>
                <span className ="photo-header-label">Active in:</span> 
                <Link to="/approved-reviews" className="photo-link">Northern California</Link>

                </Header.Subheader>
            </Header>
                <Grid columns={16} textAlign='center'>
                <Divider/>
            </Grid>
            <ReviewFeed/>
            </Container> 
            ) 
      
  }
}
    
Photographer.defaultProps = {
    
}

const mapStatetoProps = state => ({

});


export default reduxForm({
  form: 'search'
})(connect(mapStatetoProps)(Photographer))