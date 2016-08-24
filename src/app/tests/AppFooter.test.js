import React from 'react';
import sinon from 'sinon';
import test from 'ava';
import utils from 'react-addons-test-utils';

import { shallow } from 'enzyme';

import AppFooter from '../AppFooter';


test.beforeEach((t) => {
  t.context.wrapper = shallow(<AppFooter />);
});

test('footer renders correctly with default props', (t) => {
  t.not(t.context.wrapper, null);
  t.true(t.context.wrapper.hasClass('footer'));
});
