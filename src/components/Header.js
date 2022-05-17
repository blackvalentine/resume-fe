import React from 'react'
import logo from '../assets/images/logo.png'
import './Header.scss'
import {Link} from "react-router-dom"

function Header(props) {
  return (
    <div className="header" id="header">
      <nav className="nav">
        <a href="#123" className="nav__logo">
          <img src={logo} alt="logo" className="nav__image"/>
        </a>

        <div className="nav__menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#about" className="nav__link">
                <span>01.</span>
                <span>About</span>
              </a>
            </li>
            <li className="nav__item">
              <a href="#experience" className="nav__link">
                <span>02.</span>
                <span>Experience</span>
              </a>
            </li>
            <li className="nav__item">
              <a href="#project" className="nav__link">
                <span>03.</span>
                <span>Project</span>
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link">
                <span>04.</span>
                <span>Contact</span>
              </a>
            </li>
            <li className="nav__item">
              <Link to="/blogs" className="nav__link">
                <span>05.</span>
                <span>Blog</span>
              </Link>
            </li>
          </ul>
          <div className="nav_resume">Resume</div>
        </div>
      </nav>
    </div>
  )
}

export default Header
