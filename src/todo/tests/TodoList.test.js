import React from 'react';
import sinon from 'sinon';
import test from 'ava';
import utils from 'react-addons-test-utils';

import { shallow } from 'enzyme';

import TodoList from '../TodoList';


// throw a shallow-rendered version of the component into each test's context
test.beforeEach((t) => {
  t.context.wrapper = shallow(
    <TodoList />
  );
});

// test that our component renders (it has no errors)
test('renders', (t) => {
  t.not(t.context.wrapper, null);
});

test('renders correctly', (t) => {
  t.true(t.context.wrapper.hasClass('todo-list'));
});

// test that we are rendering the correct child components
test('renders children when passed in', (t) => {
  const wrapper = shallow(
    <TodoList>
      <div className='unique'></div>
    </TodoList>
  );

  t.true(wrapper.contains(<div className='unique'></div>));
});
