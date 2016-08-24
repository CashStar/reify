import React from 'react';

import { Link } from 'react-router';


const AppHeader = (props) => {
  return (
    <header className='app-header hero is-danger is-bold'>
      <div className='hero-head'>
        <nav className='nav'>
          <div className='container'>
            <div className='nav-left'>
              <Link to='/' className='nav-item is-active'>
                <h1 className='title is-1'>Reify</h1>
              </Link>
            </div>
            <span className='nav-toggle'>
              <span></span>
              <span></span>
              <span></span>
            </span>
            <div className='nav-right nav-menu'>
              <a href='https://bitbucket.org/cashstar/reify' target='_blank' className='nav-item is-active'>
                See Reify on Bitbucket
                <span className='icon'>
                  <i className='fa fa-bitbucket'></i>
                </span>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default AppHeader;
