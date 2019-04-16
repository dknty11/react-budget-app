import React, { Component } from 'react';

export default class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    error: ''
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
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        username: this.state.username,
        password: this.state.password
      })
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