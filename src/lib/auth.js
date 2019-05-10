import jwtDecode from 'jwt-decode';

export const decodeLoginToken = token => {
  const decoded = jwtDecode(token);
  localStorage.setItem('ah-token', token);
  return decoded;
};
