import axios from 'axios';
import { USER_TOKEN } from './authToken';

const Axios = axios.create({
  baseURL: 'http://localhost:4000/api/v1',
  headers: {
    'Content-Type': 'application/json'
  }
});

export const setAxiosHeader = token => { Axios.defaults.headers.common.Authorization = token; };
Axios.defaults.headers.common.Authorization = USER_TOKEN;

export default Axios;
