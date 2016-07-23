import React from 'react';
import sinon from 'sinon';
import test from 'ava';
import utils from 'react-addons-test-utils';

import { shallow } from 'enzyme';

import AppHeader from '../AppHeader';


// throw a shallow-rendered version of the component into each test's context
test.beforeEach(t => {
  t.context.wrapper = shallow(<AppHeader />);
});

// test that our component renders (it has no errors)
test('renders', t => {
  t.not(t.context.wrapper, null);
});

// tests to ensure that our component renders correctly
test('has a .appIndex div', t => {
  t.true(t.context.wrapper.hasClass('app-header'));
});
