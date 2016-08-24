import React from 'react';
import sinon from 'sinon';
import test from 'ava';
import utils from 'react-addons-test-utils';

import { shallow } from 'enzyme';

import AppHeader from '../AppHeader';


// throw a shallow-rendered version of the component into each test's context
test.beforeEach((t) => {
  t.context.wrapper = shallow(<AppHeader />);
});

// test that our component renders (it has no errors)
test('renders correctly with default props', (t) => {
  t.not(t.context.wrapper, null);
  t.true(t.context.wrapper.hasClass('app-header'));
});
