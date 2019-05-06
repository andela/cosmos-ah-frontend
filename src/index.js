import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App.jsx';
import { Provider } from 'react-redux';
import store from './state/store';
import '../node_modules/semantic-ui-css/semantic.min';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
