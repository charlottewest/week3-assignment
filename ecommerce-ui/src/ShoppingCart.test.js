import React from 'react';
import ReactDOM from 'react-dom';
import {shallow, render, mount} from 'enzyme';
import App from './App';
import ShoppingCart from './ShoppingCart';
import Airbnbs from './airbnbs.json';

it('shallow renders', () => {
  const wrapper = shallow(<ShoppingCart airbnbs={Airbnbs}/>);
  expect(wrapper.render()).toMatchSnapshot();

  expect(wrapper.props('children')).toBeDefined();
});
