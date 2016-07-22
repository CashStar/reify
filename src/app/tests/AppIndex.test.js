import React from 'react';
import sinon from 'sinon';
import test from 'ava';
import utils from 'react-addons-test-utils';

import { shallow } from 'enzyme';

import AppIndex from '../AppIndex';



// throw a shallow-rendered version of the component into each test's context
test.beforeEach(t => {
  t.context.wrapper = shallow(<AppIndex />);
});

// test that our component renders (it has no errors)
test('renders', t => {
  t.not(t.context.wrapper, null);
});

// tests to ensure that our component renders correctly
test('has 4 divs', t => {
  t.is(t.context.wrapper.find('div').length, 4);
});

test('has a .columns div', t => {
  t.is(t.context.wrapper.find('.columns').length, 1);
});

test('has three .column divs', t => {
  t.is(t.context.wrapper.find('.column').length, 3);
});
