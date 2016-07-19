import React from 'react';

import { Link } from 'react-router';


const AppHeader = (props) => {
  return (
    <section className='hero is-primary is-bold'>
      <div className='hero-head'>
        <header className='nav'>
          <div className='container'>
            <div className='nav-left'>
              <a className='nav-item'>
                <h1 className='title is-1'><Link to='/' className='nav-item is-active'>Reify</Link></h1>
              </a>
            </div>
            <span className='nav-toggle'>
              <span></span>
              <span></span>
              <span></span>
            </span>
            <div className='nav-right nav-menu'>
              <a href='https://bitbucket.org/cashstar/reify' target='_blank' className='nav-item is-active'>
                See Reify on Bitbucket
              </a>
            </div>
          </div>
        </header>
      </div>
    </section>
  );
};

export default AppHeader;