import React from "react"
import Nav from "../components/Nav"
import Img from "gatsby-image"

import styles from "./Header.module.css"

const Header = ({ logo }) => {
  return (
    <header className={styles.header}>
      <Img fixed={logo} className={styles.logo} />
      <h1 className={styles.title}>lorem ipsum blah blah blah</h1>
      <Nav />
    </header>
  )
}
export default Header
