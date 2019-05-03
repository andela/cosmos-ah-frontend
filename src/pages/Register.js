import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import styled, { css } from 'styled-components';
// import img from 'https://res.cloudinary.com/drmrayjr0/image/upload/v1556868879/bg2_sguhi2.png';
import Icon from '../components/Icon';


const ButtonWrapper = styled.button`
  border-radius: 3px;
  border: none;
  color: #3A8FDD;
  margin: 0 1em;
  padding: 0.25em 1em;

  ${props => props.primary
    && css`
      background: #3A8FDD;
      color: white;
    `};
`;

const Container = styled.div`
  margin: 0 auto;
  width: 70%;
  height: 70%;
  display: grid;
  grid-template-columns: 35% 65%;
  grid-gap: 30px;
  border: 2px solid #3A8FDD;
  content-align: center;
  background-image: url('https://res.cloudinary.com/drmrayjr0/image/upload/v1556869811/bg2_ukfjbe.png');
`;

const H1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
  text-align: center;
`;

const Center = styled.div`
  margin: 0 auto;
  content-align: center;
`;

const ContainerCenter = styled.div`
  margin: 0 auto;
  text-align: center;
  width: 100%;
`;

const Background = styled.div`
background-image: url('https://res.cloudinary.com/drmrayjr0/image/upload/v1556869811/bg1_fskesq.png');
`;

const Input = styled.input``;
const Paragraph = styled.p``;

const Register = () => (
  <Container>
    <Background>
      <div>
        <div>LOGO</div>
        <H1>
          <div>
            <h2>"Character is like a tree and reputation is like shadow.
         The shadow is what we think of it; the tree is the real thing."</h2>
            <h3>Abraham Lincoln</h3>
          </div>
        </H1>
      </div>
    </Background>
    <Center>
      <div>
        <ContainerCenter>
          <h1>Create Your Account</h1>
          <Icon />
          <p>or register using your email address</p>
        </ContainerCenter>
        <Form>
          <Form.Input label='Full Name' type='text' placeholder='Full Name' width={16} />
          <Form.Input label='Email Address' type='email' placeholder='Email Address' width={16} />
          <Form.Input label='Password' type='password' placeholder='Password' width={16} />
          <Form.Input label='Confirm Password' type='password' placeholder='Confirm Password' width={16} />
          <Form.Checkbox label='Enable Email Notifications About Product And Services.' width={16} />
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <Button type='submit' content="Sign Up" primary />
            <span style={{
              margin: '0 20px',
              fontWeight: 'bold'
            }}>or</span>
            <Button type='submit' content="Sign In" basic />
          </div>
        </Form>
      </div>
      <div style={{
        textAlign: 'center',
      }}>
        <p>By signing up, you agree to Authors Haven</p>
        <p>Terms and Conditions and Privacy Policy</p>
        <p>&copy;2019 All Right Reserved.</p>
      </div>
    </Center>
  </Container>
);

export default Register;
