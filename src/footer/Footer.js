import React from 'react';


const Footer = (props) => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='content has-text-centered'>
          <p>
            <strong>Reify</strong> by <a href='https://github.com/carlodicelico'>Carlo DiCelico</a>
          </p>
          <p>
            <a href='https://bitbucket.org/cashstar/reify' className='icon' target='_blank'>
              <i className='fa fa-bitbucket'></i>
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
