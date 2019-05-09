import { getUserProfile } from '../lib/profile';
import { mockStoreData, JWT_TOKEN } from '../__mocks__/store';

beforeEach(() => {
  localStorage.setItem('ah-token', null)
});

describe('Get User Profile succeeds', () => {
  beforeEach(() => {
    localStorage.setItem('ah-token', JWT_TOKEN);
  });

  it('Should successully return users profile', async () => {
    const userProfile = await getUserProfile();

  });
});

describe('Get User Profile fails', () => {
  beforeEach(() => {
    localStorage.setItem('ah-token', null);
  });

  it('Should fail in returning users profile', async () => {
    const userProfile = await getUserProfile();
  });
});