import axios from 'axios';
import jwtDecode from 'jwt-decode';

const url = 'http://localhost:3003/users/login'

export default function setAuthorizationToken(token) {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
}

export function setCurrentUser(user) {
  return {
    type: 'SET_CURRENT_USER',
    user
  };
}

export function login(data) {
  return dispatch => {
    return axios.post(url, data).then(res => {
      const token = res.data.token;
      localStorage.setItem('jwtToken', token);
      setAuthorizationToken(token);
      dispatch(setCurrentUser(jwtDecode(token)));
    });
  }
}