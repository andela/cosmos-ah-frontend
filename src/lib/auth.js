import jwtDecode from 'jwt-decode';

export const decodeToken = token => {
  const decoded = jwtDecode(token);
  localStorage.setItem('authorsHavenJWT', token);
  return decoded;
};
