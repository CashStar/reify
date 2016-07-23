import { List, Map } from 'immutable';


const todos = new Map({
  id: 1,
  name: 'Groceries',
  tasks: List.of(
    new Map({id: 1, text: 'Priest stranglers', status: 'active', editing: false}),
    new Map({id: 2, text: 'Head cheese', status: 'active', editing: false}),
    new Map({id: 3, text: 'Devils on horseback', status: 'completed', editing: false}),
    new Map({id: 4, text: 'Dutch babies', status: 'completed', editing: false}),
    new Map({id: 5, text: 'Toad in a hole', status: 'completed', editing: false})
  )
});

export default todos;
