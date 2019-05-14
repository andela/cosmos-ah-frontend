import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link
} from 'react-router-dom';
import Index from './Index';
import { conectedLogin } from './Login';
import Register from './Register';
import Profile from './Profile';
import '../assets/css/App.css';
import ForgotPassword from './ForgotPassword';

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Index}></Route>
      <Route path="/login" exact component={conectedLogin}></Route>
      <Route path="/signup" component={Register}></Route>
      <Route path="/profile" exact component={Profile}></Route>
      <Route path="/forgot-password" component={ForgotPassword}></Route>
    </Switch>
  </Router>
);

export default App;
