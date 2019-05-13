import axios from 'axios';

const authToken = localStorage.getItem('ah-token');

const Axios = axios.create({
  baseURL: 'https://author-haven-stage.herokuapp.com/api/v1',
  headers: {
    'Content-Type': 'application/json'
  }
});

Axios.defaults.headers.common.Authorization = authToken;

export default Axios;
