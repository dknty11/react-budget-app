import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from '../actions/login'

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      error: ''
    }
  }
  onUsernameChange = (e) => {
    const username = e.target.value;
    this.setState(() => ({ username }));
  }
  onPasswordChange = (e) => {
    const password = e.target.value;
    this.setState(() => ({ password }));
  }
  onSubmit = (e) => {
    e.preventDefault();

    if(!this.state.username || !this.state.password) {
      this.setState(() => ({ error: 'Please enter username and password' }))
    } else {
      this.props.login(this.state).then(
        (res) => this.context.router.push('/dashboard'),
        (err) => this.setState({ errors: err.response.data.errors})
      );
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Enter your username"
            autoFocus
            value={this.state.username}
            onChange={this.onUsernameChange}
          />
          <input
            type="password"
            placeholder="Enter your password"
            value={this.state.password}
            onChange={this.onPasswordChange}
          />
          <button>Login</button>
        </form>
      </div>
    )
  }
}

LoginForm.propTypes = {
  login: PropTypes.func.isRequired
}

export default connect(null, { login })(LoginForm);