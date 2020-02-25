import React from "react"
import { Link } from "gatsby"
import styles from "./Nav.module.css"

const Nav = () => {
  return (
    <nav>
      <ul className={styles.list}>
        <li>
          <Link to="/test1" className={styles.link}>
            test1
          </Link>
        </li>
        <li>
          <Link to="/test2" className={styles.link}>
            test2
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
