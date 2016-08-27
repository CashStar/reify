import React from 'react';
import test from 'ava';

import { shallow } from 'enzyme';

import TodoList, { TodoContent } from '../TodoList';
import todoLists from '../todoData';


const todoList = todoLists.toJS()[0];

test.beforeEach((t) => {
  const params = { todoId: '1' };
  t.context.wrapper = shallow(<TodoList todoList={todoList} params={params} />);
});

test('TodoList renders correctly with default props', (t) => {
  t.context.wrapper.setProps({ filter: 'active' });
  t.not(t.context.wrapper, null);
  t.true(t.context.wrapper.hasClass('todo-list'));
});

test('TodoList renders correct component when passed a known good todoId', (t) => {
  t.context.wrapper.setProps({ filter: 'active' });
  t.is(t.context.wrapper.find('TodoNotFound').length, 0);
  t.is(t.context.wrapper.find('TodoContent').length, 1);
});

test('TodoList renders correct component when when passed a known bad todoId', (t) => {
  t.context.wrapper.setProps({ filter: 'active', params: { todoId: '999' } });
  t.is(t.context.wrapper.find('TodoNotFound').length, 1);
  t.is(t.context.wrapper.find('TodoContent').length, 0);
});
