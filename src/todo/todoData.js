import { List, Map } from 'immutable';


const todoLists = List.of(
  new Map({
    id: 1,
    name: 'Groceries',
    tasks: List.of(
      new Map({id: 1, text: 'Priest stranglers', status: 'active', editing: false}),
      new Map({id: 2, text: 'Head cheese', status: 'active', editing: false}),
      new Map({id: 3, text: 'Devils on horseback', status: 'completed', editing: false}),
      new Map({id: 4, text: 'Dutch babies', status: 'completed', editing: false}),
      new Map({id: 5, text: 'Toad in a hole', status: 'completed', editing: false})
    )
  }),
  new Map({
    id: 2,
    name: 'Meetings',
    tasks: List.of(
      new Map({id: 6, text: 'Follow up with Sofia about the SMM campaign', status: 'active', editing: false}),
      new Map({id: 7, text: 'Discuss survey results with Alex', status: 'active', editing: false}),
      new Map({id: 8, text: 'Chat with Josh about user testing', status: 'completed', editing: false})
    )
  }),
  new Map({
    id: 3,
    name: 'Coding',
    tasks: List.of(
      new Map({id: 9, text: 'Refactor tests to use macros', status: 'active', editing: false}),
      new Map({id: 10, text: 'Stub out tests', status: 'completed', editing: false})
    )
  }),
);

export default todoLists;
