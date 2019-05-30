import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { cleanup } from 'react-testing-library';
import { getFollowings, followOrUnfollow, getFollowingsSuccess, getFollowingsFailure } from '../../profile/actions';
import axios from '../../../lib/axios';

afterEach(cleanup);
const mockStore = configureMockStore([thunk]);
const store = mockStore({});

const following = {
  status: 'success',
  data: 'You are now following this user'
}

const followUserResponse = {
  data: {
    data: {
      following
    }
  }
};


describe('Follow user action', () => {
  it('get followings success', async () => {
    axios.get = jest.fn().mockReturnValue(Promise.resolve(followUserResponse));
    await store.dispatch(getFollowings());
    expect(store.getActions()[0]).toEqual(getFollowingsSuccess(followUserResponse.data.data.following));
  });

  it('get followings failure', async () => {
    const error = { response: { data: {} }};
    axios.get = jest.fn().mockReturnValue(Promise.reject(error));
    await store.dispatch(getFollowings());
    expect(store.getActions()[0]).toEqual(getFollowingsFailure(error.response.data));
  });

  it('follow and unfollow', async () => {
    // const error = { response: { data: {} }};
    axios.post = jest.fn().mockReturnValue(Promise.resolve());
    await store.dispatch(followOrUnfollow(1));
    // expect(store.getActions()[0]).toEqual(getFollowingsFailure(error.response.data));
  });
});
