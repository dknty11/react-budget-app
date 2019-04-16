import React from 'react';
import LoginForm from './LoginForm';
import { login } from '../actions/login';
import { connect } from 'react-redux';

const Login = (props) => {
  return (
    <div>
    <h1>Login</h1>
    <LoginForm
      onSubmit={(user) => {
        props.dispatch(login(user));
        // props.history.push('/dashboard');
      }}
    />
  </div>
)}

export default connect()(Login);