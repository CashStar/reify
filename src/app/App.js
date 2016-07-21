import React from 'react';
import Helmet from 'react-helmet';

import { Link } from 'react-router';

import AppHeader from './AppHeader';

// a container to hold our head info and act as our app's main entry point
// in app/appDispatcher - don't alter this unless you know what you're doing!
const App = (props) => {
  return (
    <div className='app'>

      {/* a helmet is a thing for your head - see https://github.com/nfl/react-helmet */}
      <Helmet
        htmlAttributes={{'lang': 'en'}}
        title='Reify'
        titleTemplate='CashStar - %s'
        base={{'target': '_blank', 'href': 'http://localhost:8080'}}
        meta={[
            {'name': 'charset', 'content': 'utf-8'},
            {'name': 'viewport', 'content': 'width=device-width, initial-scale=1'},
            {'name': 'description', 'content': 'An opinionated boilerplate for React apps'},
        ]}
        link={[
            {'rel': 'canonical', 'href': 'https://bitbucket.org/cashstar/reify'},
            {'rel': 'stylesheet', 'href': 'https://fonts.googleapis.com/css?family=Roboto:300,300italic,700,700italic'},
            {'rel': 'stylesheet', 'href': 'https://cdnjs.cloudflare.com/ajax/libs/normalize/3.0.3/normalize.css'},
            {'rel': 'stylesheet', 'href': 'https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css'},
            {'rel': 'stylesheet', 'href': 'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.1.0/css/bulma.min.css'}
        ]}
      />

      {/* put some basic layout  stuff that applies to all children here */}
      <AppHeader {...props} />

      {/* important! this lets us propagate our props all the way down! */}
      {/* see https://facebook.github.io/react/docs/top-level-api.html#react.cloneelement */}
      {React.cloneElement(props.children, { ...props })}

    </div>
  );
};

export default App;
