import React from 'react';
import ReactDOM from 'react-dom';
import {shallow, render, mount} from 'enzyme';
import App from './App';
import Airbnb from './Airbnb';
import Airbnbs from './airbnbs.json';

it('shallow renders', () => {
  const testAirbnb = Airbnbs[0]
  const wrapper = shallow(<Airbnb airbnb={testAirbnb}/>);
  expect(wrapper.render()).toMatchSnapshot();

  expect(wrapper.props('children')).toBeDefined();
});
