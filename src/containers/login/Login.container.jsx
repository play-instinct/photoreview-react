import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import './Login.layout.css';
// import { fetchUserLogin } from '../../actions'

class Login extends React.Component {
  submitHandler(values) {
    const email = values.email;
    const password = values.password;
    // this.props.fetchUserLogin(email, password);
}
  render() {
    return ( 
    <div className = "login-container">
    <h1>Login</h1>
      <form className="login" onSubmit={this.props.handleSubmit(this.submitHandler.bind(this))} method="post">
        <div className="test">
          <label htmlFor="email">Email</label>
          <Field name="email" component="input" id="email" type="text" placeholder="john@yahoo.com" required />
        </div>
        <div className = "test">
          <label htmlFor="password">Password</label>
          <Field name="password" component="input" id="password" type="password" required />
        </div>
        <div className="actions">
          <input type="submit" name="login" value="Login"/> <a href="/forgot" className="i-forgot">I forgot my password</a>
        </div>
      </form>
    <div className="account">
    </div>
    <div className="contact">
    </div>  
  </div>
  );
  }

}


const mapStateToProps = state => ({

});

 

export default reduxForm({
  form: 'login'
})(connect(mapStateToProps)(Login))
