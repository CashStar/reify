import Raven from 'raven-js';


// set up a key and app ID for your own app here
const sentryKey = '';
const sentryApp = '';

// build our sentryUrl
export const sentryUrl = `https://${sentryKey}@app.getsentry.com/${sentryApp}`;

// hook to let us customize Raven's captureException
export function logException(ex, context) {
  Raven.captureException(ex, {
    extra: context
  });
  Raven.showReportDialog();
  /*eslint no-console:0*/
  window && window.console && console.error && console.error(ex);
}
