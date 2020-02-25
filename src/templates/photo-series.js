import React from "react"
import { graphql } from "gatsby"
import PhotoList from "../components/PhotoList"
import styles from "./photo-series.module.css"
import Header from "../components/Header"

function PhotoSeriesTemplate({ data }) {
  console.log(data)
  return (
    <main className={styles.grid}>
      <Header logo={data.file.childImageSharp.fixed} />
      <PhotoList photos={data.allFile.edges} />
    </main>
  )
}

export default PhotoSeriesTemplate

export const query = graphql`
  query GetImages($pathRegex: String!) {
    allFile(filter: { relativePath: { regex: $pathRegex } }) {
      edges {
        node {
          id
          name
          childImageSharp {
            id
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    file(relativePath: { eq: "images/bicycle.png" }) {
      childImageSharp {
        fixed(width: 200, height: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
