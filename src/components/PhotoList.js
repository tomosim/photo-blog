import React from "react"
import Img from "gatsby-image"
import styles from "./PhotoList.module.css"

const PhotoList = ({ photos }) => {
  return (
    <ul className={styles.list}>
      {photos.map(photo => {
        return (
          <li className={styles.card} key={photo.node.id}>
            <Img fluid={photo.node.childImageSharp.fluid}></Img>
          </li>
        )
      })}
    </ul>
  )
}

export default PhotoList
