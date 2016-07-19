import React from 'react';
import Raven from 'raven-js';

import { render } from 'react-dom';

import appRoutes from 'app/appRoutes';
import { sentryUrl, logException } from 'utils/sentryConfig';


// set up Raven for logging errors to Sentry
Raven.config(sentryUrl, {
  // custom properties, like git commit and user level
  tags: {
    git_commit: 'foo',
    userLevel: 'editor'
  }
}).install();

// other stuff you can do -->

// you can log an exception by doing this!
/*logException(new Error('download failed!'), {
  email: 'foo@bar.com'
});*/

// captureMessage lets you log some arbitrary message to sentry
// Raven.captureMessage('something bad');

// show user a report dialog when something bad happens
// Raven.showReportDialog();

// Get a handle to the DOM node where we want to mount our app
const mountNode = document.querySelector('#app');

// render our app's routes into our mountNode
render(appRoutes, mountNode);
