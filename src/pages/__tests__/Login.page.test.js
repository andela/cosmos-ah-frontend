import React from 'react';
import { cleanup } from 'react-testing-library';
import Login from '../Login';

// const mapPropsToState = function mapStateToProps(state) {
//   return { loginState: state.Auth.login };
// }

// afterEach(cleanup);

// test('Renders <Login />', () => {
//   const LoginComponent = renderWithRedux(<BrowserRouter><Login /></BrowserRouter>);
//   expect(LoginComponent).toBeTruthy();
//   expect(LoginComponent).toMatchSnapshot();
// });

// test('Renders <Login /> form', () => {
//   const { getByPlaceholderText } = renderWithRedux(<BrowserRouter><Login store={mapPropsToState}/></BrowserRouter>);
//   expect(getByPlaceholderText('Email Address')).toBeTruthy();
//   expect(getByPlaceholderText('Password')).toBeTruthy();
// });

// test('render <Login />  Login Header', () => {
//   const LoginHeader = renderWithRedux(<BrowserRouter><Login store={mapPropsToState}/></BrowserRouter>);
//   const HeaderText = LoginHeader.getByText('Login');
//   expect(HeaderText.textContent).toBe('Login');
// });

describe('Login Component', () => {
  let wrapper;
  // our mock login function to replace the one provided by mapDispatchToProps
  const mockLoginfn = jest.fn();

  beforeEach(() => {
    // pass the mock function as the login prop
    wrapper = shallow(<Login login={mockLoginfn} />);
  });
  // ...tests here...
  describe('When the form is submitted', () => {
    it('should call the mock login function', () => {
      wrapper.find('#loginForm').simulate('submit', { preventDefault() {} });
      expect(mockLoginfn.mock.calls.length).toBe(1);
    });

    it('should be called with the email and password in the state as arguments', () => {
      // fill in email field with blah@gmail.com
      wrapper
        .find('#email')
        .simulate('change', {
          target: { name: 'email', value: 'blah@gmail.com' },
        });

      // fill in password field with cats
      wrapper
        .find('#password')
        .simulate('change', { target: { name: 'password', value: 'cats' } });

      // simulate form submission
      wrapper.find('#loginForm').simulate('submit', { preventDefault() {} });

      // test to see arguments used after its been submitted
      expect(mockLoginfn.mock.calls[1][0]).toEqual({
        email: 'blah@gmail.com',
        password: 'cats',
      });
    });
  });
});
