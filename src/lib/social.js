import jwtDecode from 'jwt-decode';

export const redirectSocialAuth = type => {
  window.location.href = `https://author-haven-stage.herokuapp.com/api/v1/auth/${type}`;
};

export const decodeToken = token => jwtDecode(token);

export const setLocalStorage = (item, itemName) => localStorage.setItem(item, itemName);

export const getLocalStorage = (item, itemName) => localStorage.getItem(item, itemName);
