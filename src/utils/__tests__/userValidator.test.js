import { validateSignupInput, validateProperty } from '../userValidator';

const data = {
  fullName: 'test test',
  username: 'testuser',
  password: 'Secret@1234',
  confirmPassword: 'Secret@1234',
  email: 'test@andela.com',
};

test('should Validate Signup Data', () => {
  expect(validateSignupInput(data)).toEqual({ errors: {}, isValid: true });
});

test('should return error for missing data', () => {
  expect(validateSignupInput({ ...data, fullName: '' })).toEqual({
    errors: { fullName: 'FullName can only contains number and letters' },
    isValid: false,
  });
  expect(validateSignupInput({ ...data, username: '' })).toEqual({
    errors: { username: 'Username cannot be blank' },
    isValid: false,
  });
  expect(validateSignupInput({ ...data, password: '' })).toEqual({
    errors: { password: 'Password cannot be blank', confirmPassword: 'Password must match' },
    isValid: false,
  });
  expect(validateSignupInput({ ...data, email: '' })).toEqual({
    errors: { email: 'Email cannot be blank' },
    isValid: false,
  });
});

test('should return error for invalid data', () => {
  expect(validateSignupInput({ ...data, fullName: 'we' })).toEqual({
    errors: { fullName: 'Full Name must be more than 5 characters but less than 20' },
    isValid: false,
  });
  expect(validateSignupInput({ ...data, username: 'testUser123' })).toEqual({
    errors: { username: 'Username can only be a lower case character(a-z), special characters and numbers are not allowed' },
    isValid: false,
  });
  expect(validateSignupInput({ ...data, email: 'test' })).toEqual({
    errors: { email: 'Invalid email format' },
    isValid: false,
  });
  expect(validateSignupInput({ ...data, password: 'password' })).toEqual({
    errors: {
      confirmPassword : 'Password must match',
      password:
      'Password should contain at least 8 characters, a lower case character(a-z), an uppercase character(A-Z) and special characters/symbols',
    },
    isValid: false,
  });
  expect(validateSignupInput({ ...data, confirmPassword: '' })).toEqual({
    errors: { confirmPassword: "Try password again" },
    isValid: false,
  });
});

test('should validate data', () => {
    const { fullName, username, email, password, confirmPassword} = data;
  expect(validateProperty({fullName})).toEqual(undefined)
  expect(validateProperty({username})).toEqual(undefined)
  expect(validateProperty({email})).toEqual(undefined)
  expect(validateProperty({password})).toEqual(undefined)
  expect(validateProperty({confirmPassword})).toEqual(undefined)
})
