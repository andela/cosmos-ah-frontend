import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router, Link
} from 'react-router-dom';
import App from './pages/App';
import { Provider } from 'react-redux';
import store from './state/store';
import "semantic-ui-css/semantic.min.css";

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
);
