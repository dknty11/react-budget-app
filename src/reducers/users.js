import axios from 'axios';

const isLogin = !!(localStorage.getItem('token') && localStorage.getItem('authentication'))
const initialState = isLogin ? { loggedIn: true } : { loggedIn: false }

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      const user = login(state.username, state.password)
      console.log(user)
      return state
    default:
      return state;
  }
}

const login = (username, password) => {
  const url = 'http://localhost:3003/users/login'
  axios.post(url, {}, {
    auth: {
      email: username,
      password
    }
  }).then(() => {
    console.log('succeed')
  }).catch((e) => {
    console.log(`Error login: ${e}`)
  })
}