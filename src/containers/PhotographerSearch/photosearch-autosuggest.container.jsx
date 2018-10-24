import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'; 
import { Field, reduxForm }  from 'redux-form';
import { Link } from 'react-router-dom';
import { FormInput, fieldValidators} from 'semantic-redux-form-fields';
import { Container, Grid, Divider, Form, Search,  Header, Segment, Icon, Item, Label, Rating } from 'semantic-ui-react';
import Autosuggest from 'react-autosuggest';
import Autocomplete from  'react-autocomplete';

import { fetchAllPhotographerNames, matchPhotographer } from '../../actions';



class PhotoSearch extends Component {

  componentDidMount(){
    this.props.fetchAllPhotographerNames();
  }

  state = { value: '' };

  render() {
    console.log(this.props.names);
    console.log(this.state.value);
    return (
      <div style = {{}}>
       {this.props.names.length ? 
        <Autocomplete
          value={ this.state.value }
          inputProps={{ id: 'states-autocomplete' }}
          wrapperStyle={{ position: 'relative', display: 'inline-block' }}
          shouldItemRender={(item, value) => item.name.toLowerCase().indexOf(value.toLowerCase()) > -1}
          items={this.props.names  }
          getItemValue={ item => item.name }
          onChange={(event, value) => this.setState({ value: event.target.value }) }
          onSelect={ value => this.setState({ value }) }
          renderItem={ (item, isHighlighted) => (
            <div
              className={`item ${isHighlighted ? 'item-highlighted' : ''}`}
              key={ item._id } >
              { item.name }
            </div>
          )}
        />
        : 
        <div>couldn't find this photographer.</div> }  
      </div>
      );
    }
  }





const mapStateToProps = state => ({
    appState: state.appState,
    user: state.user,
    names: state.photographer.photographers
  });
  
export default connect(mapStateToProps, {fetchAllPhotographerNames})(PhotoSearch);