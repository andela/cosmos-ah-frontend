import profileReducer from '../../profile/reducers';
import { getUserProfileSuccess, getUserProfileFailure } from '../../profile/actions';

const initialState = {
  loadedData: {},
  error: null,
  isLoading: false,
};


const userProfile = {
  fullName: 'Chike Ozulumba',
  email: 'chike@gmail.com',
  username: 'chikeozulumba',
  bio: "Hold on now, aren't there already specs for this kind of thing? - Well... no. While there are a few handy specifications for dealing with JSON data, most notably Douglas Crockford's JSONRequest proposal, there's nothing to address the problems of general application-level messaging. More on this later.",
  imageUrl: 'https://res.cloudinary.com/dmq014llt/image/upload/v1557326099/people/beautiful-brunette-cute.jpg',
  verified: true,
  verificationToken: null,
  passwordResetToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNoaWtlQGdtYWlsLmNvbSIsImlhdCI6MTU1Nzc2Njg1NywiZXhwIjoxNTU3ODUzMjU3fQ.H7iNEJAUGH2yxrbTrAz7XI_MR3I4oyGRoBTknMIp8RQ',
  resetTokenExpires: '2019-05-14T17:00:57.554Z'
};

describe('GET PROFILE REDUCER', () => {
  it('The initial state', () => {
    expect(profileReducer(initialState, undefined)).toEqual(initialState);
  });
  it('The state on successful load of user profile', () => {
    expect(profileReducer({}, getUserProfileSuccess(userProfile))).toEqual({ isLoading: true, loadedData: userProfile });
  });
  it('The state on unsuccessful load of user profile', () => {
    const error = { status: 'error', message: 'Invalid token supplied' };
    expect(profileReducer({}, getUserProfileFailure(error))).toEqual({ error, });
  });
  it('The state on default', () => {
    const error = { status: 'error', message: 'Invalid token supplied' };
    expect(profileReducer({}, { type: 'DEFAULT', payload: error })).toEqual({});
  });
  it('The initial state is not provided', () => {
    const error = { status: 'error', message: 'Invalid token supplied' };
    expect(profileReducer(undefined, { type: 'DEFAULT', payload: error })).toEqual(initialState);
  });
});