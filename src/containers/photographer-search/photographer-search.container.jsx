import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'; 
import { Field, reduxForm }  from 'redux-form';
import { Link } from 'react-router-dom';

import { FormInput, fieldValidators} from 'semantic-redux-form-fields';
import { Container, Grid, Divider, Form, Search,  Header, Segment, Icon } from 'semantic-ui-react';
import AdminSearch from '../AdminSearch/AdminSearch.container';
import './photographer-search.container.css';
import PhotoSearch from '../PhotographerSearch/photosearch-autosuggest.container';



class PhotographerSearch extends React.Component {
    componentDidMount(){
        // this.props.fetchRide(this.props.match.params.id);
    }
    render() {
        return(
            <Grid container centered columns={1} id="ph-search-container">
                <Grid.Column>
                        <Header as='h4' textAlign='center' icon>
                        <Icon name='searchengin' />
                            Photographer Search
                            <Header.Subheader textAlign='center'>
                                Start typing photographer's name, instagram handle, or twitter username. 
                            </Header.Subheader>
                            <Header.Subheader id="location">
                            <Link to="/location-search" >Search by Location</Link>
                            </Header.Subheader>
                        </Header>
                        </Grid.Column>
                        <Grid.Column  textAlign='center' className="less-margin" id="photo-search-container">
                            <PhotoSearch/>
                        </Grid.Column>
                        <Grid.Column centered padded>
                            {/* <Header as='h4' dividing  textAlign='center'>
                            Search Results
                            </Header> */}
                        </Grid.Column>
            </Grid>
        )        
    }

    }
    
 PhotographerSearch.defaultProps = {
    
}

const mapStatetoProps = state => ({

});



//on click of result of lookup, should take you to the photographer view ((pass that data to photographer view))

//is this still a reduxform export or? 
export default reduxForm({
  form: 'search'
})(connect(mapStatetoProps)(PhotographerSearch))