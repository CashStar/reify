import React from 'react';
import sinon from 'sinon';
import test from 'ava';
import TestUtils from 'react-addons-test-utils';

import { shallow } from 'enzyme';

import Task from '../Task';
import todoLists from '../todoData';


const myTask = todoLists.toJS()[0].tasks[0];

test.beforeEach((t) => {
  t.context.wrapper = shallow(<Task task={myTask} />);
});

test('Task renders correctly with default props', (t) => {
  t.not(t.context.wrapper, null);
  t.true(t.context.wrapper.hasClass('task'));

  // default state: not completed, not editing
  t.context.wrapper.setProps({ isCompleted: false, isEditing: false })
  t.false(t.context.wrapper.hasClass('completed'));
  t.false(t.context.wrapper.hasClass('editing'));
  t.is(t.context.wrapper.find('input [defaultChecked=false]').length, 1);
});

test('Task renders correctly when completed', (t) => {
  t.context.wrapper.setProps({ isCompleted: true, isEditing: false })
  t.true(t.context.wrapper.hasClass('completed'));
  t.is(t.context.wrapper.find('input [defaultChecked=true]').length, 1);
});

test('Task renders correctly when editing', (t) => {
  t.context.wrapper.setProps({ isCompleted: false, isEditing: true })
  t.true(t.context.wrapper.hasClass('editing'));
  t.is(t.context.wrapper.find('input [defaultChecked=false]').length, 1);
});

test('Task renders correctly when editing a completed task', (t) => {
  t.context.wrapper.setProps({ isCompleted: true, isEditing: true })
  t.true(t.context.wrapper.hasClass('completed'));
  t.true(t.context.wrapper.hasClass('editing'));
  t.is(t.context.wrapper.find('input [defaultChecked=true]').length, 1);
});
