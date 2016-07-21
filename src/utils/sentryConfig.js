import Raven from 'raven-js';


// set up a key and app ID for your own app here
const sentryKey = 'aa0d4d289ea7413b995205439117a0fa';
const sentryApp = '87623';

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
