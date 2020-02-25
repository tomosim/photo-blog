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
      context: { slug: page, pathRegex: `/content/${page}/` },
    })
  })
}
