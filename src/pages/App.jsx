import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link
} from 'react-router-dom';
import Home from './Home';
import Login from './Signin';
import Article from './Article';
import Profile from './Profile';

import '../assets/sass/App.scss';

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home}></Route>
      <Route path="/login" component={Login}></Route>
      <Route path="/articles" component={Article}></Route>
      <Route path="/profile" component={Profile}></Route>
    </Switch>
  </Router>
);

export default App;
