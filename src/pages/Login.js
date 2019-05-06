import React, { useState } from 'react';
import { Button, Form, Message } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { signin } from '../state/auth/actions';

const Signin = props => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleSubmit = async event => {
    try {
      event.preventDefault();
      setLoading(true);
      await props.signin({ email, password });
      props.history.push('/dashboard');
    } catch (error) {
      if (error.response.data.data.password) {
        setErrors(() => ({ ...error.response.data.data }));
        setLoading(false);
      } else {
        setErrors(() => ({ ...error.response.data }));
        setLoading(false);
      }
    }
  };

  const handleChange = event => {
    event.persist();
    setFormData(() => ({ ...formData, [event.target.name]: event.target.value }));
  };

  const { email, password } = formData;
  return (
    <Form onSubmit={handleSubmit} loading={loading}>
    <h1>Welcome to the Sign In page</h1>
    {errors.password && (
          <Message negative>
            <Message.Header>Something went wrong</Message.Header>
            <p>{errors.password}</p>
          </Message>
    )}
    {errors.data && (
          <Message negative>
            <Message.Header>Something went wrong</Message.Header>
            <p>{errors.data}</p>
          </Message>
    )}
      <Form.Field>
        <label htmlFor='email'>Email</label>
        <input type='email' id='email' name='email' placeholder='example@example.com' onChange={handleChange} value={email} required/>
      </Form.Field>
      <Form.Field>
        <label htmlFor='password'>Password</label>
        <input type='password' id='password' name='password' placeholder='your password...' onChange={handleChange} value={password} required/>
      </Form.Field>
      <Button primary>Login</Button>
    </Form>
  );
};

export default connect(null, { signin })(Signin);
