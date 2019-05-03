import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link
} from 'react-router-dom';
import HomePage from './Index';
import Login from './Signin';
import Article from './Article';

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={HomePage}></Route>
      <Route path="/login" component={Login}></Route>
      <Route path="/articles" component={Article}></Route>
    </Switch>
  </Router>
);

export default App;
