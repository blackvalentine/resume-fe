import { useState, useEffect } from 'react'
import './Header.scss'
import { Link } from "react-router-dom"
import SvgAnimation from './SvgAnimation'

function HeaderBlog(props) {
  const [navScroll, setNavScroll] = useState(false)
  const [toggleMenu, setToggleMenu] = useState(false)

  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY >= 50) {
        setNavScroll(true)
      }
      else {
        setNavScroll(false)
      }
    }
  })

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu)
  }

  return (
    <div className="header" id="header">
      <nav className={navScroll ? "nav nav__scroll" : "nav"}>
        <div className="nav__group">
          <div className="nav__toggle-btn" onClick={handleToggleMenu}>
            {toggleMenu ? <i className="fas fa-times nav__toggle-icon"></i> : <i className="fas fa-list nav__toggle-icon"></i>}
          </div>
          <Link to="/" className="nav__logo">
            <SvgAnimation />
          </Link>
        </div>

        <div className={toggleMenu ? "nav__menu menu__show" : "nav__menu"}>
          <ul className="nav__list">
            <li className="nav__item">
              <Link to="/" className="nav__link">
                <span>Back to Homepage</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default HeaderBlog;
