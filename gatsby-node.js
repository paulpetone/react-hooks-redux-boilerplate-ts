const fetch = require(`node-fetch`)

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions
  if (page.path.match(/^\/dynamic-route/)) {
    page.matchPath = "/dynamic-route/*"

    createPage(page)
  }
}

exports.sourceNodes = async ({
  actions: { createNode },
  createContentDigest,
}) => {
  // get data from GitHub API at build time
  const result = await fetch(`https://api.github.com/repos/gatsbyjs/gatsby`)
  const resultData = await result.json()
  createNode({
    // fields to fetch
    nameWithOwner: resultData.full_name,
    url: resultData.html_url,
    anyOtherData: {
      hi: 'hola',
      owner: resultData.owner
    },
    // required fields
    id: `example-build-time-data`,
    parent: null,
    children: [],
    internal: {
      type: `Example`,
      contentDigest: createContentDigest(resultData),
    },
  })
}