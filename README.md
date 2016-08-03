![](https://bitbucket.org/cashstar/reify/raw/master/reify.png)

# re·i·fy /ˈrēəˌfī/

_verb formal_

make something abstract more concrete or real

---

## Quick Start Guide

```bash
# general maintenance
brew update; brew upgrade # update nodejs and npm
npm update -g # update global node modules
npm i -g npm-check-updates # use this to keep npm modules up-to-date
ncu # check for dependency updates

# dev tasks
npm i # install project dependencies
npm start # run local development server at http://localhost:8080

# testing
npm test # run tests
npm run test:watch # run tests in watch mode
npm run test:verbose # extra output
npm run test:werbose # watch mode, extra output
npm run lint # run linter
npm run cover # run coverage report
```

## About
Reify is an opinionated boilerplate for [non-universal](https://medium.com/@mjackson/universal-javascript-4761051b7ae9) (client-only) React apps, configured with best practices and a curated selection of libraries from the React ecosystem.

### Goals
Reify's goals are focused primarily on developer experience and code quality. It aims to:

* make it quick and easy to start building
* encourage best practices
* help you write well-tested, maintainable React apps
* allow you to build the client in isolation
* make it easy to go from development to production

It's set up with TDD in mind and is configured with hot module reloading enabled for a painless developer experience. It also includes a simple demo app that you can examine and learn from.

### Core libraries
* [Babel](https://babeljs.io/) lets us use future JS language features now
* [React](https://github.com/facebook/react) for modular view components
* [react-router](https://github.com/rackt/react-router) for mapping UI state to a URI
* [Redux](https://github.com/rackt/redux), Facebook's futuristic [Flux](https://facebook.github.io/react/blog/2014/05/06/flux.html) implementation, to manage app state
* [react-router-redux](https://github.com/reactjs/react-router-redux) syncs routes with our state tree
* [redux-form](https://github.com/erikras/redux-form) to manage form state in Redux
* [redux-saga](https://github.com/yelouafi/redux-saga) keeps all side effects in a single place
* [immutable](https://facebook.github.io/immutable-js/) gives us immutable data structures
* [axios](https://github.com/mzabriskie/axios) promises-based HTTP client
* [react-helmet](https://github.com/nfl/react-helmet) to manage title and meta tag info
* [lru-memoize](https://github.com/erikras/lru-memoize) to speed up form validation
* [multireducer](https://github.com/erikras/multireducer) to combine single reducers into one key-based reducer
* [redux-storage](https://github.com/michaelcontento/redux-storage) lets us save redux state tree to localStorage

### Build
* [webpack](http://webpack.github.io/) bundles our application
* [webpack-dev-server](https://webpack.github.io/docs/webpack-dev-server.html) an easy-to-use local dev server with hot module reloading
* [HtmlWebpackPlugin](https://github.com/ampedandwired/html-webpack-plugin) simplifies creation of our app bundle's HTML files
* [style-loader](https://github.com/webpack/style-loader), [css-loader](https://github.com/webpack/css-loader),
[stylus-loader](https://github.com/shama/stylus-loader), [sass-loader](https://github.com/jtangelder/sass-loader) and [less-loader](https://github.com/webpack/less-loader) to allow import of stylesheets in plain css, stylus, sass and less

### Code quality
* [eslint](http://eslint.org) to maintain a consistent code style
* [AVA](https://github.com/avajs/ava) futuristic test runner for javascript
* [sinon](http://sinonjs.org/) standalone spies, stubs and mocks
* [nyc](https://github.com/istanbuljs/nyc) coverage reporting for apps that spawn subprocesses
* [enzyme](https://github.com/airbnb/enzyme) React component testing
* [Redux Dev Tools](https://github.com/gaearon/redux-devtools) for next generation developer experience
* [Redux Test Recorder](https://github.com/conorhastings/redux-test-recorder) automagically generate tests for your reducers based on the actions in your app
* [raven-js](https://github.com/getsentry/raven-js) allows us to log client app errors to [Sentry](https://getsentry.com)
* [nock](https://github.com/node-nock/nock) HTTP mocking library
* [jsdom](https://github.com/tmpvar/jsdom) mock the DOM

## More Info
For an explanation of the patterns used, see [PATTERNS.md](PATTERNS.md). To get started using Reify, see [STARTUP.md](STARTUP.md). To learn how the demo app works, see [DEMO.md](DEMO.md). To learn how to contribute, see [CONTRIBUTING.md](CONTRIBUTING.md).

###### *[Big Idea](https://thenounproject.com/mediatemple/collection/big-idea-collection/?i=13680) graphic was designed by [Edward Boatman](https://thenounproject.com/edward) and is in the [public domain](https://creativecommons.org/publicdomain/zero/1.0/)*