import React from 'react';
import test from 'ava';

import { shallow } from 'enzyme';

import Footer from '../Footer';


test.beforeEach((t) => {
  t.context.wrapper = shallow(<Footer />);
});

test('footer renders correctly with default props', (t) => {
  t.not(t.context.wrapper, null);
  t.true(t.context.wrapper.hasClass('footer'));
});
