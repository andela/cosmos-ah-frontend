import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link
} from 'react-router-dom';
import Index from './Index';
import Login from './Login';

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Index}></Route>
      <Route path="/login" component={Login}></Route>
    </Switch>
  </Router>
);

export default App;
