/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")
const pages = []

exports.onCreateNode = ({ node, getNode }) => {
  if (node.internal.type === `ImageSharp`) {
    const fileNode = getNode(node.parent)
    const pageName = fileNode.relativePath.split("/")[1]
    if (!pages.includes(pageName)) {
      pages.push(pageName)
    }
  }
}
exports.createPages = ({ actions: { createPage } }) => {
  pages.forEach(page => {
    createPage({
      path: page,
      component: path.resolve(`./src/templates/photo-series.js`),
      context: { slug: page },
    })
  })
}
