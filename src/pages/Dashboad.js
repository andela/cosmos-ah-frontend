/* eslint-disable no-undef */
import React from 'react';
import { Button } from 'semantic-ui-react';

const DashBoard = props => {
  const onClick = () => {
    localStorage.removeItem('authorsHavenJWTToken');
    props.history.push('/');
  };
  return (<div>
    <h3>This is the DashBoard Page</h3>
    <p>Where Awesome Functionality Exist</p>
    <Button onClick={onClick}>Logout</Button>
  </div>);
};

// const mapStateToProps = state => ({ isAuthenticated: !!state.login.signin.data.data.token });

export default DashBoard;
