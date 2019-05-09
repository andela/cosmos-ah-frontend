import axios from 'axios';

const Axios = axios.create({
  baseURL: 'https://author-haven-stage.herokuapp.com/api/v1',
  headers: {
    'Content-Type': 'application/json'
  }
});

Axios.interceptors.request.use(config => {
  const authToken = localStorage.getItem('ah-token');
  if (authToken) { config.headers.Authorization = authToken; }
  return config;
});

export default Axios;
