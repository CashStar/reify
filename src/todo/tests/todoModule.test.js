import React from 'react';
import sinon from 'sinon';
import test from 'ava';

import {reducerTest} from 'redux-ava';
import { shallow } from 'enzyme';
import { Map } from 'immutable';

import reducer, { setInitialState } from '../todoModule';
import todoLists from '../todoData';


const initialState = new Map(),
  initialStateJS = {};

test('reducer sets initial state when passed a Map', reducerTest(
  reducer, // given our reducer
  initialState, // and an empty Map for initial state
  setInitialState(initialState, todoLists), // when we call setInitialState()
  todoLists // then our initial state should be set to our todoData
));

test('reducer sets initial state when passed an Object', reducerTest(
  reducer, // given our reducer
  initialStateJS, // and an empty Map for initial state
  setInitialState(initialState, todoLists), // when we call setInitialState()
  todoLists // then our initial state should be set to our todoData
));

test('reducer sets initial state when passed undefined', reducerTest(
  reducer, // given our reducer
  undefined, // and an empty Map for initial state
  setInitialState(initialState, todoLists), // when we call setInitialState()
  todoLists // then our initial state should be set to our todoData
));
