import React from 'react';
import { cleanup, render } from 'react-testing-library';
import { HandleSocialAuth }  from '../HandleSocialAuth';

afterEach(cleanup);

test('<App /> component', () => {
  const app = render(<HandleSocialAuth />);
  expect(app).toBeTruthy();
});
