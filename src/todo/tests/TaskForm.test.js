import React from 'react';
import sinon from 'sinon';
import test from 'ava';
import utils from 'react-addons-test-utils';

import { shallow } from 'enzyme';

import TaskForm from '../TaskForm';


// throw a shallow-rendered version of the component into each test's context
test.beforeEach((t) => {
  t.context.wrapper = shallow(<TaskForm />);
});

// test that our component renders (it has no errors)
test('renders', (t) => {
  t.not(t.context.wrapper, null);
});
