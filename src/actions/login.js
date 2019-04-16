export const login = ({ username = '', password = '' } = {}) => ({
  type: 'LOGIN',
  username,
  password
});