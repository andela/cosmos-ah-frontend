import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link
} from 'react-router-dom';
import Index from './Index';
import { ConnectedRegister } from './Register';
import { connectedLogin } from './Login';
import Profile from './Profile';
import { ConnectedHandleSocialAuth } from '../components/HandleSocialAuth';
import '../assets/css/App.css';
import ForgotPassword from './ForgotPassword';
import { connectedFeed } from './Feeds';
import CreateArticle from './CreateArticle';
import { PrivateRoute } from '../lib/AuthenticateRoute';

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Index} />
      <Route path="/login" exact component={connectedLogin} />
      <Route path="/signup" component={ConnectedRegister} />
      <PrivateRoute path="/profile" exact component={Profile} />
      <Route path="/forgot-password" component={ForgotPassword} />
      <Route path="/handlesocialauth" component={ConnectedHandleSocialAuth} />
      <PrivateRoute path="/feeds" component={connectedFeed} />
      <PrivateRoute path="/article/create" exact component={CreateArticle} />
    </Switch>
  </Router>
);

export default App;
