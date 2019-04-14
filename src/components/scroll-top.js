import React, { Component } from 'react';
import { toTop as scrollToPageTop } from './../utils/scroll';

import './../styles/scroll-top.scss';

class ScrollTop extends Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.state = {
      shouldShowScrollTopArrow: false
    };
  }

  handleScroll() {
    const boundingRect = ((document || {}).documentElement || {})
      .getBoundingClientRect;
    if (boundingRect) {
      if (document.documentElement.getBoundingClientRect().top * -1 > 100)
        this.setState({ shouldShowScrollTopArrow: true });
      else this.setState({ shouldShowScrollTopArrow: false });
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    const hideArrowClass = this.state.shouldShowScrollTopArrow ? '' : 'hide';
    return (
      <div className="scroll-top" onClick={(e) => scrollToPageTop()}>
        <div
          className={`arrow ${hideArrowClass}`}>
          <span className="svg svg-icon-arrow-next">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46 8"> 
              <path d="M44 4.5l-3.1 2.8.7.7L46 4l-4.4-4-.7.7L44 3.5"></path> 
              <path className="short" d="M44 3.5H-.5v1H44"></path> 
              <path className="long" d="M-99 4.5H44v-1H-99"></path>
             </svg>
          </span>
          <div className="to-top">Up</div>
        </div>
      </div>
    );
  }
}

export default ScrollTop;
