import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Signin from './Signin';
import Dashboard from './Dashboad';

const App = () => (
  <div className='ui container'>
    <Switch>
      <Route path="/" exact component={Home}></Route>
      <Route path="/signin" component={Signin}></Route>
      <Route path="/dashboard" component={Dashboard}></Route>
    </Switch>
    </div>
);

export default App;
