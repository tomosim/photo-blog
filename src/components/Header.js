import React from "react"
import styles from "./Header.module.css"
import Nav from "../components/Nav"

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>My Name</h1>
      <Nav />
    </header>
  )
}

export default Header
