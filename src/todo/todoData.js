import { List, Map } from 'immutable';


const todos = List.of(
  new Map({id: 1, text: 'React', status: 'active', editing: false}),
  new Map({id: 2, text: 'Redux', status: 'active', editing: false}),
  new Map({id: 3, text: 'Immutable', status: 'completed', editing: false})
);
