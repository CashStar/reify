import React from 'react';
import test from 'ava';

import { shallow } from 'enzyme';

import Header from '../Header';


// throw a shallow-rendered version of the component into each test's context
test.beforeEach((t) => {
  t.context.wrapper = shallow(<Header />);
});

// test that our component renders (it has no errors)
test('renders correctly with default props', (t) => {
  t.not(t.context.wrapper, null);
  t.true(t.context.wrapper.hasClass('app-header'));
});
