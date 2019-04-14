import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toElement as scrollToElement } from './../utils/scroll';

import './../styles/sroll-next.scss';

class ScrollToNext extends Component {
  scrollToNext() {
    const { pageSelector } = this.props;
    const nextPage = document.querySelector(pageSelector);
    scrollToElement(nextPage);
  }

  render() {
    return (
      <div className="scroll-to-next" onClick={(e) => this.scrollToNext()}>
        <div className="scroll-text">Scroll</div>
        <span className="svg svg-icon-arrow-next" >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46 8"> 
            <path d="M44 4.5l-3.1 2.8.7.7L46 4l-4.4-4-.7.7L44 3.5"></path> 
            <path className="short" d="M44 3.5H-.5v1H44"></path>
            <path className="long" d="M-99 4.5H44v-1H-99"></path>
          </svg>
        </span>
      </div>
    );
  }
}

ScrollToNext.propTypes = {
  pageSelector: PropTypes.string
};

export default ScrollToNext;
