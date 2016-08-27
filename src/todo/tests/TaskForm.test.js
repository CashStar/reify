import React from 'react';
import test from 'ava';

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
