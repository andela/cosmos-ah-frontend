import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link
} from 'react-router-dom';
import Index from './Index';
import Login from './Login';
import Register from './Register.jsx';
import Article from './Article';

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Index}></Route>
      <Route path="/login" component={Login}></Route>
      <Route path="/signup" component={Register}></Route>
      <Route path="/articles" component={Article}></Route>
    </Switch>
  </Router>
);

export default App;
