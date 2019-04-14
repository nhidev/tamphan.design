import React, { Component } from 'react';
import { toElement as scrollToElement } from './../utils/scroll';
import './../styles/header.scss';

class Header extends Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.state = {
      isSticky: false
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    if (window.pageYOffset > this.nav.offsetTop) {
      this.setState({
        isSticky: true
      });
    } else {
      this.setState({
        isSticky: false
      });
    }
  }

  scrollToPage(pageSelector) {
    const nextPage = document.querySelector(pageSelector);
    scrollToElement(nextPage);
  }

  render() {
    const stickyClass = this.state.isSticky ? 'sticky' : '';
    return (
      <nav
        className={stickyClass}
        ref={(elem) => {
          this.nav = elem;
        }}
      >
        <div className="menu">
          <div
            className="menu__item active"
            onClick={(e) => this.scrollToPage('.about-page')}
          >
            About
          </div>
          <div
            className="menu__item"
            onClick={(e) => this.scrollToPage('#projects')}
          >
            Work
          </div>
         
          <div
            className="menu__item download">
            <a href="./images/resume.pdf" download>Resume</a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
