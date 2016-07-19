import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import appDispatcher from './appDispatcher';
import appStore, { appHistory } from './appStore';
import AppIndex from './AppIndex';


const appRoutes = (
  <Provider store={appStore}>
    <Router history={appHistory}>
      <Route path="/" component={appDispatcher}>
        <IndexRoute component={AppIndex} />
      </Route>
    </Router>
  </Provider>
);

export default appRoutes;
