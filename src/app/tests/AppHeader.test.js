import React from 'react';
import sinon from 'sinon';
import test from 'ava';
import utils from 'react-addons-test-utils';

import { shallow } from 'enzyme';

import AppHeader from '../AppHeader';


test('renders', t => {
  const wrapper = shallow(<AppHeader />);
  t.is(wrapper.find('section').length, 1);
});
