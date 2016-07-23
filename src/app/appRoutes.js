import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import appDispatcher from './appDispatcher';
import appStore, { appHistory } from './appStore';
import AppIndex from './AppIndex';
import TodoList from '../todo/TodoList';


const appRoutes = (
  <Provider store={appStore}>
    <Router history={appHistory}>
      <Route path="/" component={appDispatcher}>
        <IndexRoute component={AppIndex} />
        <Route path="/todos" component={TodoList} />
      </Route>
    </Router>
  </Provider>
);

export default appRoutes;
