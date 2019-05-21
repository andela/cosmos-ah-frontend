import axios from 'axios';

const authToken = localStorage.getItem('ah-token');

const Axios = axios.create({
  baseURL: 'http://localhost:4000/api/v1/',
  headers: {
    'Content-Type': 'application/json'
  }
});

export const setAxiosHeader = token => { Axios.defaults.headers.common.Authorization = token; };

export default Axios;
