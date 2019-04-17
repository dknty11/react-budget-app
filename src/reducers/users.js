// const isLogin = !!(localStorage.getItem('token') && localStorage.getItem('authentication'))
// const initialState = isLogin ? { loggedIn: true } : { loggedIn: false }
import isEmpty from 'lodash/isEmpty';

const initialState = {}

export default (state = initialState, action = {}) => {
  switch(action.type) {
    case 'SET_CURRENT_USER':
      return {
        isAuthenticated: !isEmpty(action.user),
        user: action.user
      };
    default: return state;
  }
}