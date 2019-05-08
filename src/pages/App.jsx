import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link
} from 'react-router-dom';
import Index from './Index';
import Login from './Login';
import Register from './Register';
import Article from './Article';
import Profile from './Profile';
import '../assets/css/App.css';

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Index}></Route>
      <Route path="/login" component={Login}></Route>
      <Route path="/signup" component={Register}></Route>
      <Route path="/articles" component={Article}></Route>
      <Route path="/profile" exact component={Profile}></Route>
    </Switch>
  </Router>
);

export default App;
