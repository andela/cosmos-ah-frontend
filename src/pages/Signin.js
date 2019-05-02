import React, { Component, Fragment } from 'react';

class Login extends Component {
  render() {
    return (
      <Fragment>
        <h3>Log in</h3>
        <p>Welcome back!</p>
        <button> <a href='https://author-haven-stage.herokuapp.com/api/v1/auth/linkedin'>Sign in</a> </button> <br/><br/>
        <form>
          <div>
            <input type="text" placeholder="Email address" />
          </div>
          <div>
            <input type="text" placeholder="Password" />
          </div>
        </form>
      </Fragment>
    );
  }
}

export default Login;
