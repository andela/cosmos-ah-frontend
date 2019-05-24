import axios from 'axios';

const Axios = axios.create({
  baseURL: 'https://author-haven-stage.herokuapp.com/api/v1/',
  headers: {
    'Content-Type': 'application/json'
  }
});

export const setAxiosHeader = token => { axios.defaults.headers.common.Authorization = token; };

export default Axios;
