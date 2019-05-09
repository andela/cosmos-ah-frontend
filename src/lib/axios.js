import axios from 'axios';

export default axios.create({
  baseURL: 'http://author-haven-stage.herokuapp.com/api/v1',
  headers: {
    'Content-Type': 'application/json'
  }
});
