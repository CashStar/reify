import React from 'react';
import sinon from 'sinon';
import test from 'ava';
import TestUtils from 'react-addons-test-utils';

import { shallow, mount } from 'enzyme';
import { List, Map } from 'immutable';

import TodoList from '../TodoList';
import todoLists from '../todoData';


const { renderIntoDocument, scryRenderedDOMComponentsWithTag } = TestUtils;

test.beforeEach((t) => {
  const todoList = todoLists.toJS()[0],
    filter = 'active';

    t.context.component = renderIntoDocument(
      <TodoList todoList={todoList} filter={filter} />
    );

    console.log(t.context.component);

});

test('renders correctly', (t) => {
  t.not(t.context.component, null);
  t.true(t.context.component.hasClass('todo-list'));
  t.is(t.context.component.find('TodoInfo').length, 1);
  t.is(t.context.component.find('TaskForm').length, 1);
  t.true(t.context.component.find('ul').hasClass('task-list'));
});

test('renders active items by default', (t) => {
  t.is(t.context.wrapper.find('Task').length, 2)
});
