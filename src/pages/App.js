import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';


const App = () => (
  <div className='ui container'>
    <Switch>
      <Route path="/" exact component={Home}></Route>
      <Route path="/login" component={Login}></Route>
    </Switch>
    </div>
);

export default App;
