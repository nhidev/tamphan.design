import React from 'react'
import Header from './header'
import './../styles/cover.scss'
import lion from '../images/lion.png'

const Cover = () => {
  return (
    <div className="landing-page">
      <Header />
      <main>
        <div className="intro-wrapper content-grid">
          <div className="intro-heading">
            <span>I'm </span>
            <span className="tagline">UI / UX</span>
            <img src={lion} alt="avatar" /> designer
          </div>
          <div className="business-card">
            <div className="base-info">
              <p className="welcome">
                Welcome to <span>my portfolio</span>
              </p>
              <p className="name">Phan Thi Ngoc Tam </p>
              <p className="birth">14/08/1988</p>
              <a href="/" className="view-more">See more :)</a>
            </div>
            <div className="contact-me">
            <p className="phone">0933 532 059</p><p className="email">ptntam@gmail.com</p> 
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Cover
