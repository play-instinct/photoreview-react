import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'; 
import { Field, reduxForm }  from 'redux-form';
import { FormInput, fieldValidators} from 'semantic-redux-form-fields';
import { Container, Grid, Divider, Form, Search,  Header, Segment, Icon } from 'semantic-ui-react';


const PhotographerSearch = props => (
  <Grid container centered columns={1}>
  <Grid.Column>
         <Header as='h4' textAlign='center' icon>
         <Icon name='search' />
            Photographer Search
            <Header.Subheader textAlign='center'>
                Start typing photographer's name, instagram handle, or twitter username. 
            </Header.Subheader>
        </Header>
        </Grid.Column>
        <Grid.Column>
        <Form method="post" size='large'>
        <Field  component={FormInput}
                    name="search" 
                    label=""
                    type="search"
                    width={16}>
        </Field>
        {/* <Form.Button content='Search' /> */}
        </Form>
        </Grid.Column>
        <Grid.Column centered padded>
            <Header as='h4' dividing  textAlign='center'>
            Search Results
            </Header>
        </Grid.Column>
      

  </Grid>
        );
    
 PhotographerSearch.defaultProps = {
    
}

const mapStatetoProps = state => ({

});


export default reduxForm({
  form: 'search'
})(connect(mapStatetoProps)(PhotographerSearch))