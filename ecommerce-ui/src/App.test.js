import React from 'react';
import ReactDOM from 'react-dom';
import {shallow, render, mount} from 'enzyme';
import App from './App';
import AirbnbList from './AirbnbList';
import ShoppingCart from './ShoppingCart';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('shallow renders', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.render()).toMatchSnapshot();

  expect(wrapper.props('children')).toBeDefined();
});
