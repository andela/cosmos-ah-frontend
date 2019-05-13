
import React from 'react';
import { shallow } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render, cleanup } from 'react-testing-library';
import configureMockStore from 'redux-mock-store';
import sinon from 'sinon';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Profile from '../Profile';
import { mockStoreData } from '../../__mocks__/store';

const mockStore = configureMockStore();
const store = mockStore(mockStoreData);

// afterEach(cleanup);
configure({ adapter: new Adapter() });

const viewProfile = jest.fn();

const shallowSetup = () => {
  const props = { viewProfile, };
  const enzymeWrapper = shallow(<Provider {...props} store={store}><Router><Profile /></Router></Provider>);
  return {
    props,
    enzymeWrapper
  }
}

describe('Shallow rendered component', () => {
  let wrapper, sandbox;
  beforeEach(() => {
    sandbox = sinon.createSandbox();
    Object.getOwnPropertyNames(Profile.prototype).forEach(method => {
      sandbox.spy(Profile.prototype, method);
    })
    const { enzymeWrapper} = shallowSetup();
    wrapper = enzymeWrapper
  })
  afterEach(() => {
    sandbox.restore();
    // createTodo.mockClear();
  });
  test('<Profile /> page', () => {
    expect(wrapper).toBeTruthy();
    expect(wrapper.find('div.ui.container.secondary.menu').length).toBe(0);
    expect(wrapper.find('a.item').length).toBe(0);
    expect(wrapper.find('div.right.item').length).toBe(0);
    expect(wrapper).toMatchSnapshot();
  });
});
