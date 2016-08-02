import React from 'react';
import sinon from 'sinon';
import test from 'ava';
import utils from 'react-addons-test-utils';

import { shallow } from 'enzyme';

import TodoInfo from '../TodoInfo';
import todoLists from '../todoData';


const todoList = todoLists.toJS()[0];

test.beforeEach((t) => {
  t.context.wrapper = shallow(<TodoInfo todoList={todoList} />);
});

test('TodoInfo renders correctly with default props', (t) => {
  t.not(t.context.wrapper, null);
  t.true(t.context.wrapper.hasClass('todo-info'));
});
