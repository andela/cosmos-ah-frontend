import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';
import "semantic-ui-css/semantic.min.css";
import { Provider } from 'react-redux';
import store from './state/store';
import { signSuccess } from './state/auth/actions';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
