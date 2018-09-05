import React from 'react';
import './Signup.container.css';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createUser } from '../../actions'

class Signup extends React.Component {
  submitHandler(val){
    const email = val.email;
    const password = val.password;
    const name = val.name;
    this.props.createUser(name, email, password);
    
  }

render () {
  return (<div className = "signup-container">
  <h1>Sign Up</h1>
  <form className="login" onSubmit={this.props.handleSubmit(this.submitHandler.bind(this))} method="post">
  <div className="test">
  <label htmlFor="name">Name</label>
  <Field name="name" component="input" id="name" type="text" placeholder="Danielle Jbali" required />
  </div>    
  <div className="test">
  <label htmlFor="username">Email</label>
  <Field name="email" component="input" id="email" type="text" placeholder="daniellejballi@yahoo.com" required />
  </div>
  <div className="actions">
  <input type="submit" name="login" value="Sign Up"/> <a href="/privacy" className="i-forgot">Privacy Policy</a>
  </div>
  </form>
  </div>
) 
}
}

const mapStateToProps = state => ({

});

export default reduxForm({
  form: 'signup'
})(connect(mapStateToProps, {createUser})(Signup))