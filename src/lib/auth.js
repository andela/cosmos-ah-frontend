import jwtDecode from 'jwt-decode';

export const decodeLoginToken = token => {
  const decoded = jwtDecode(token);
  localStorage.setItem('authorsHavenJWT', token);
  return decoded;
};
