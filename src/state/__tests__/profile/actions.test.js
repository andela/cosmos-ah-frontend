import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import axios from '../../../lib/axios';
import { getProfile, getUserProfileSuccess, getUserProfileFailure } from '../../profile/actions';
import { JWT_TOKEN } from '../../../__mocks__/store';

const mockStore = configureMockStore([thunk]);
const store = mockStore({});

const mockProfile = {
  id: '979eaa2e-5b8f-4103-8192-4639afae2ba9',
  role: "admin",
  fullName: 'Chike Ozulumba',
  id: "979eaa2e-5b8f-4103-8192-4639afae2ba9",
  email: 'chike@gmail.com',
  username: 'chikeozulumba',
  bio: "Hold on now, aren't there already specs for this kind of thing? - Well... no. While there are a few handy specifications for dealing with JSON data, most notably Douglas Crockford's JSONRequest proposal, there's nothing to address the problems of general application-level messaging. More on this later.",
  imageUrl: 'https://res.cloudinary.com/dmq014llt/image/upload/v1557326099/people/beautiful-brunette-cute.jpg',
  verified: true,
  verificationToken: null,
  passwordResetToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNoaWtlQGdtYWlsLmNvbSIsImlhdCI6MTU1Nzc2Njg1NywiZXhwIjoxNTU3ODUzMjU3fQ.H7iNEJAUGH2yxrbTrAz7XI_MR3I4oyGRoBTknMIp8RQ',
  resetTokenExpires: '2019-05-14T17:00:57.554Z'
};

describe('GET PROFILE DATA', () => {
  afterEach(() => {
    axios.defaults.headers.common.Authorization = 'JWT_TOKEN';
  });

  it('Get user profile data successfully', async () => {
    axios.defaults.headers.common.Authorization = JWT_TOKEN;
    axios.post = jest.fn().mockReturnValue(Promise.resolve({ data: mockProfile }));
    await store.dispatch(getProfile());
    expect(store.getActions()[0]).toEqual(getUserProfileSuccess(mockProfile));
  });

  it('Get user profile data unsuccessful', async () => {
    const error = { status: 'error', message: 'Invalid token supplied' };
    axios.post = jest.fn().mockReturnValue(Promise.resolve(error));
    await store.dispatch(getProfile());
    expect(store.getActions()[1].type).toEqual(getUserProfileFailure(error).type);
    expect(store.getActions()[1]).toEqual(getUserProfileFailure(error));
  });
});
