import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import appDispatcher from './appDispatcher';
import appStore, { appHistory } from './appStore';
import Index from '../index/Index';
import TodoList from '../todo/TodoList';
import TodoGrid from '../todo/TodoGrid';
import NotFound from '../notfound/NotFound';


const appRoutes = (
  <Provider store={appStore}>
    <Router history={appHistory}>
      <Route path="/" component={appDispatcher}>
        <IndexRoute component={Index} />
        <Route path="todos" component={Index} />
        <Route path="todos/:todoId" component={TodoList} />
        <Route path="notfound" component={NotFound} />
        <Route path="*" component={NotFound} />
      </Route>
    </Router>
  </Provider>
);

export default appRoutes;
