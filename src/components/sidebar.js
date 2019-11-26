import React from "react"
import { bubble as Menu } from "react-burger-menu"
import logo from "../images/Image 1.png"

class Sidebar extends React.Component {
  showSettings(event) {
    event.preventDefault()
  }

  render() {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <>
        <Menu pageWrapId={"page-wrap"} outerContainerId={"outer-container"}>
          <a id="home" className="menu-item" href="/">
            Home
          </a>
          <a id="about" className="menu-item" href="/about">
            About
          </a>
          <a id="contact" className="menu-item" href="/contact">
            Contact
          </a>
        </Menu>
        <header>
          <a href="#" className="logo">
            <img src={logo} alt="MadAve" />
          </a>
          <ul className="header__socials">
            <li className="socials">
              <i className="fab fa-facebook-square fa-2x"></i>
            </li>
            <li className="socials">
              <i className="fab fa-twitter-square fa-2x"></i>
            </li>
            <li className="socials">
              <i className="fab fa-instagram fa-2x"></i>
            </li>
          </ul>
        </header>
      </>
    )
  }
}

export default Sidebar
