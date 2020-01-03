import React, { Component } from "react"

export default class Footer extends Component {
  render() {
    return (
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    )
  }
}
