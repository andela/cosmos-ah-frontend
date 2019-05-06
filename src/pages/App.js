import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link
} from 'react-router-dom';
import Home from './Home';
import Login from './Signin';
import Article from './Article';
import SignUpForm from '../components/Signup';

const App = () => (
  <Router>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/articles">Articles</Link>
      </li>
    </ul>
    <Switch>
      <Route path="/" exact component={Home}></Route>
      <Route path="/login" component={SignUpForm}></Route>
      <Route path="/articles" component={Article}></Route>
    </Switch>
  </Router>
);

export default App;
