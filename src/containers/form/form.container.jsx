import React from 'react';
import { Form } from 'semantic-ui-react';
import { Container } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import {connect} from 'react-redux';
import { FormInput, fieldValidators} from 'semantic-redux-form-fields';
 
class Example extends React.Component {
  render() {
    return (
        <Container>
            <Form>
                <Field
                    component={FormInput}
                    name="fieldName" 
                    label="Label"
                    validate={fieldValidators.required}
                    defaultValue="default value"
                    width={5} />
            </Form>
        </Container>
    );
  }
}
 


const mapStatetoProps = state => ({
})



const ExampleForm = reduxForm({
  form: 'formName'
})(Example);
 

export default connect(mapStatetoProps)(ExampleForm);