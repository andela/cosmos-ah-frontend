import axios from 'axios';

const authToken = localStorage.getItem('ah-token');

const Axios = axios.create({
  baseURL: 'https://author-haven-stage.herokuapp.com/api/v1/',
  headers: {
    'Content-Type': 'application/json'
  }
});

export const setAxiosHeader = token => { axios.defaults.headers.common.Authorization = token; };

export default Axios;
