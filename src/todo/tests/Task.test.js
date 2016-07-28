import React from 'react';
import sinon from 'sinon';
import test from 'ava';
import utils from 'react-addons-test-utils';

import { shallow } from 'enzyme';

import Task from '../Task';
import todoLists from '../todoData';


const myTask = todoLists.toJS()[0].tasks[0];

test.beforeEach((t) => {
  t.context.wrapper = shallow(<Task task={myTask} />);
});

test('Task renders without errors', (t) => {
  t.context.wrapper.setProps({ isCompleted: false, isEditing: false })
  t.not(t.context.wrapper, null);
  t.true(t.context.wrapper.hasClass('task'));
});

test('Task renders items correctly when completed', (t) => {
  t.context.wrapper.setProps({ isCompleted: true, isEditing: false })
  t.true(t.context.wrapper.hasClass('completed'));
});

test('Task renders items correctly when being edited', (t) => {
  t.context.wrapper.setProps({ isCompleted: false, isEditing: true })
  t.true(t.context.wrapper.hasClass('editing'));
});
