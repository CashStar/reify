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
  t.context.wrapper = shallow(<TodoContent todoList={todoList} />);
});

test('TodoContent renders active items when the filter is active', (t) => {
  t.context.wrapper.setProps({ filter: 'active' });
  t.is(t.context.wrapper.find('Task').length, 2)
});


test('TodoContent renders all items when the filter is all', (t) => {
  t.context.wrapper.setProps({ filter: 'all' });
  t.is(t.context.wrapper.find('Task').length, 5)
});


test('TodoContent renders completed items when the filter is completed', (t) => {
  t.context.wrapper.setProps({ filter: 'completed' });
  t.is(t.context.wrapper.find('Task').length, 3)
});
