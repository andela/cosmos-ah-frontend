import $ from 'jquery';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
const { JSDOM } = require("jsdom");

configure({ adapter: new Adapter() });

global.$ = global.jQuery = $;

$.fn.mediumInsert = () => true; 

global.document = new JSDOM('<!doctype html><html><body></body></html>');
global.window = document.defaultView;
global.navigator = {userAgent: 'node.js'};

Object.defineProperty(window, 'yourVar', { value: 'yourValue' });

global.getBoundingClientRect = jest.fn(() => ({
  width: 120,
  height: 120,
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
}));
