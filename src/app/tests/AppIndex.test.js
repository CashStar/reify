import React from 'react';
import sinon from 'sinon';
import test from 'ava';
import utils from 'react-addons-test-utils';

import { shallow } from 'enzyme';

import AppIndex from '../AppIndex';


test('renders', t => {
  const wrapper = shallow(<AppIndex />);
  t.is(wrapper.find('div').length, 4);
});

test('has a .columns div', t => {
  const wrapper = shallow(<AppIndex />);
  t.is(wrapper.find('.columns').length, 1);
});

test('has three .column divs', t => {
  const wrapper = shallow(<AppIndex />);
  t.is(wrapper.find('.column').length, 3);
});
