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
import ViewArticle from './ViewArticle';
import ResetPassword from './ResetPassword';

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Index}></Route>
      <Route path="/login" exact component={connectedLogin}></Route>
      <Route path="/signup" component={ConnectedRegister}></Route>
      <Route path="/profile" exact component={Profile}></Route>
      <Route path="/forgot-password" component={ForgotPassword}></Route>
      <Route path='/handlesocialauth' component={ConnectedHandleSocialAuth} />
      <Route path="/feeds" component={connectedFeed} />
      <Route path="/article/create" exact component={CreateArticle}></Route>
      <Route path="/article/:id" exact component={ViewArticle}></Route>
      <Route path="/password-reset" exact component={ResetPassword} />
    </Switch>
  </Router>
);

export default App;
