import React from 'react';
import sinon from 'sinon';
import test from 'ava';
import TestUtils from 'react-addons-test-utils';

import { shallow } from 'enzyme';
import { List, Map } from 'immutable';

import TodoList, { TodoContent } from '../TodoList';
import todoLists from '../todoData';


const createTodoList = (t, filter = 'active', params = {todoId: '1'}) => {
  t.context.wrapper = shallow(
    <TodoList params={params} filter={filter} />
  );
};

const createTodoContent = (t, filter = 'active') => {
  const todoList = todoLists.toJS()[0];

  t.context.wrapper = shallow(
    <TodoContent todoList={todoList} filter={filter} />
  );
};

test('TodoList renders without errors', (t) => {
  createTodoList(t);
  t.not(t.context.wrapper, null);
  t.true(t.context.wrapper.hasClass('todo-list'));
});

test('TodoList renders correct component when passed a known good todoId', (t) => {
  createTodoList(t);
  t.is(t.context.wrapper.find('TodoNotFound').length, 0);
  t.is(t.context.wrapper.find('TodoContent').length, 1);
});

test('TodoList renders correct component when when passed a known bad todoId', (t) => {
  createTodoList(t, 'active', {todoId: '999'});
  t.is(t.context.wrapper.find('TodoNotFound').length, 1);
  t.is(t.context.wrapper.find('TodoContent').length, 0);
});

test('TodoContent renders active items when the filter is active', (t) => {
  createTodoContent(t);
  t.is(t.context.wrapper.find('Task').length, 2)
});


test('TodoContent renders all items when the filter is all', (t) => {
  createTodoContent(t, 'all');
  t.is(t.context.wrapper.find('Task').length, 5)
});


test('TodoContent renders completed items when the filter is completed', (t) => {
  createTodoContent(t, 'completed');
  t.is(t.context.wrapper.find('Task').length, 3)
});
