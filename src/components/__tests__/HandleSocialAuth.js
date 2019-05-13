import React from 'react';
import { cleanup, render } from 'react-testing-library';
import { handleSocialAuth }  from '../HandleSocialAuth';

afterEach(cleanup);

test('<App /> component', () => {
  const app = render(<handleSocialAuth />);
  expect(app).toBeTruthy();
});
