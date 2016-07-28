import React from 'react';
import sinon from 'sinon';
import test from 'ava';
import TestUtils from 'react-addons-test-utils';

import { shallow } from 'enzyme';
import { List, Map } from 'immutable';

import TodoList, { TodoContent } from '../TodoList';
import todoLists from '../todoData';


const todoList = todoLists.toJS()[0];

test.beforeEach((t) => {
  const params = { todoId: '1' };
  t.context.wrapper = shallow(<TodoList todoList={todoList} params={params} />);
});

test('TodoList renders without errors', (t) => {
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
