import React from 'react';
import sinon from 'sinon';
import test from 'ava';
import TestUtils from 'react-addons-test-utils';

import { shallow } from 'enzyme';
import { List, Map } from 'immutable';

import TodoList from '../TodoList';
import todoLists from '../todoData';


test.beforeEach((t) => {
  const todoList = todoLists.toJS()[0],
    filter = 'active';

  t.context.wrapper = shallow(
    <TodoList todoList={todoList} filter={filter} />
  );
});

test('renders correctly', (t) => {
  t.not(t.context.wrapper, null);
  t.true(t.context.wrapper.hasClass('todo-list'));
  t.is(t.context.wrapper.find('TodoInfo').length, 1);
  t.is(t.context.wrapper.find('TaskForm').length, 1);
  t.true(t.context.wrapper.find('ul').hasClass('task-list'));
});

test('renders active items by default', (t) => {
  t.is(t.context.wrapper.find('Task').length, 2)
});
