import React from 'react';
import Header from './header';

import './../styles/cover.scss';

const Cover = () => {
 
  return (
    <div className="landing-page">
      <Header />
      <main>
        <div className="intro-wrapper content-grid">
          <div className="intro-heading">
          I'm UI/UX designer
          </div>
          <div className="tagline">
         
          </div>
        </div>
      </main>
    </div>
  );
};


export default Cover;
